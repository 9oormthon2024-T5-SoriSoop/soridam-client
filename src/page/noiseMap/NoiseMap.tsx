import React, { useEffect, useState } from "react";
import LocationSearchBar from "../../component/locationSearchBar/LocationSearchBar";
import { FilterBtn, NoiseMapHeader } from "./NoiseMap.styles";
import LocationSuggestion from "../../component/locationSuggestion/LocationSuggestion";
import axios from "axios";
import { Suggestion } from "../../types/LocationSearchList";
import FilterIcon from "../../assets/icons/ico_map_filter@3x.png";
import useCurrentLocation from "../../hook/useCurrentLocation";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import FilterBottomSheet from "../../component/filterBottomSheet/FilterBottomSheet";
import MarkerGreen from '../../assets/icons/ico_marker_quiet_default@2x.png';
import MarkerBlue from '../../assets/icons/ico_marker_normal_default@2x.png';
import MarkerRed from '../../assets/icons/ico_marker_loud_default@2x.png';
import MarkerDefault from '../../assets/icons/ico_marker_default@2x.png';
import { AnimatePresence } from "framer-motion";

interface NoiseData {
  id: number;
  x: number; // 경도
  y: number; // 위도
  avgDecibel: number;
  maxDecibel: number;
  createdAt: string;
  review: string;
  locationName?: string; // 지역 이름
}

const API_BASE_URL = "https://f4cc-27-119-100-172.ngrok-free.app/api";
const AUTH_HEADER = {
  Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJubmluam9fb24iLCJpYXQiOjE3MzczNzc4MjcsImV4cCI6MTczNzM3OTYyNywic3ViIjoiZWYxNDQyOTMtMWE2Zi00YjJlLWJkOTgtOWE5MWZmYmQ2NWQ2Iiwicm9sZSI6IlVTRVIifQ.Uoemp6tdFZp7_zp6xSUnYFBhXE1EoMD8JVKbdh6OMXc", // 여기에 실제 토큰 값을 넣으세요.
  "ngrok-skip-browser-warning": "69420",
};

const NoiseMap: React.FC = () => {
  const { coords, error } = useCurrentLocation(); // 현재 위치 가져오기
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [noiseList, setNoiseList] = useState<NoiseData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoiseData = async () => {
      if (!coords) return; // 좌표가 없으면 API 호출 안 함
    
      try {
        setLoading(true);
        console.log("Requesting noise data with:", {
          x: coords.longitude, // 경도
          y: coords.latitude,  // 위도
        });
        
        const response = await axios.get(`${API_BASE_URL}/noises`, {
          headers: AUTH_HEADER,
          params: {
            x: coords.longitude, // Check if "longitude" and "latitude" are correct parameter names
            y: coords.latitude,  
          },
        });
        
        setNoiseList(response.data.noises); // 응답에서 noises 배열을 받음
      } catch (err) {
        setFetchError("데이터를 가져오는데 실패했습니다.");
        console.error("Error fetching noise data:", err); // Detailed error log
      } finally {
        setLoading(false);
      }
    };

    fetchNoiseData();
  }, [coords]); // coords가 바뀔 때마다 데이터 호출

  const getMarkerImage = () => {
    if (!coords || !noiseList) return MarkerDefault;

    const matchedNoise = noiseList.find(
      (noise) =>
        Math.abs(noise.x - coords.longitude) < 0.0001 &&
        Math.abs(noise.y - coords.latitude) < 0.0001
    );

    if (!matchedNoise) return MarkerDefault;

    const { avgDecibel } = matchedNoise;

    if (avgDecibel >= 0 && avgDecibel < 70) return MarkerGreen;
    if (avgDecibel >= 70 && avgDecibel < 100) return MarkerBlue;
    if (avgDecibel >= 100 && avgDecibel <= 120) return MarkerRed;

    return MarkerDefault;
  };

  const apiKey = "83ce629a6d7b809e79dc0b269d5a78c9"; // API 키

  const fetchSuggestions = async (query: string) => {
    try {
      const response = await axios.get("https://dapi.kakao.com/v2/local/search/keyword.json", {
        headers: { Authorization: `KakaoAK ${apiKey}` },
        params: { query },
      });
      setSuggestions(response.data.documents);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    if (value.length >= 2) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleAddressSelect = (placeName: string, lat: number, lng: number) => {
    setSelectedAddress(placeName); // 선택한 주소 이름만 설정
    setCoordinates({ lat, lng }); // 선택한 좌표 설정
    setSuggestions([]); // 제안 목록 초기화
    setSearchTerm(placeName); // 검색어를 선택한 주소로 설정
    setIsFocused(false); // 포커스 해제
  };
  
  const handleFocus = () => {
    setIsFocused(true);
    if (searchTerm.trim().length >= 2) {
      fetchSuggestions(searchTerm); // 검색어가 2자 이상일 때만 호출
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      setSelectedAddress(searchTerm);
      setSuggestions([]);
      setIsFocused(false);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 200); // 200ms 딜레이 추가 (사용자 경험 개선)
  };
  
  const handleBackIconClick = () => {
    setSearchTerm(""); // 입력값 초기화
    setIsFocused(false); // 포커스 해제
  };

  const handleFilterClick = () => {
    setIsBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    // 닫기 애니메이션이 완료된 후 상태를 업데이트
    setTimeout(() => setIsBottomSheetOpen(false), 300); // exit 애니메이션 지속 시간과 동일
  };

  // const [noiseList, setNoiseList] = useState<NoiseData[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  // const [currentPosition, setCurrentPosition] = useState({
  //   latitude: 37.5665, // 기본 위치 (서울)
  //   longitude: 126.9780,
  // });

  // const JAVASCRIPT_KEY = "474943ecc6f14c17466a22ee39f0c57f"; // Kakao JavaScript 키


  // let map: any; // Kakao Map 객체를 저장할 변수

  // // Geolocation으로 현재 위치 가져오기
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setCurrentPosition({ latitude, longitude }); // 현재 위치 저장
  //     },
  //     (error) => {
  //       console.error("현재 위치를 가져오는 중 오류 발생:", error);
  //       alert("현재 위치를 가져올 수 없습니다. 기본 위치(서울)로 표시합니다.");
  //     }
  //   );
  // }, []);

  // // Noise 데이터 가져오기
  // useEffect(() => {
  //   const fetchNoiseData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await ApiService.getUserNoises(1); // 사용자 ID 1로 데이터 가져오기
  //       setNoiseList(response.data.responses); // Noise 데이터를 상태에 저장
  //     } catch (err) {
  //       setError("데이터를 가져오는데 실패했습니다.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNoiseData();
  // }, []);

  // // Kakao 지도 로드
  // useEffect(() => {
  //   const loadKakaoMap = () => {
  //     const { kakao } = window as any;

  //     const container = document.getElementById("map");
  //     const options = {
  //       center: new kakao.maps.LatLng(currentPosition.latitude, currentPosition.longitude),
  //       level: 3,
  //     };

  //     map = new kakao.maps.Map(container, options);

  //     // 현재 위치를 네이버 지도처럼 파란색 중심 원과 하얀 테두리로 표시
  //     new kakao.maps.Circle({
  //       center: new kakao.maps.LatLng(currentPosition.latitude, currentPosition.longitude),
  //       radius: 12, // 하얀 테두리의 바깥 원 크기
  //       strokeWeight: 2, // 하얀 테두리 두께
  //       strokeColor: "#FFFFFF", // 하얀 테두리 색깔
  //       strokeOpacity: 1, // 완전 불투명
  //       fillColor: "#FFFFFF", // 하얀색 내부 채우기
  //       fillOpacity: 1, // 완전 불투명
  //       map: map, // 표시할 지도 객체
  //     });

  //     // 중심의 파란 원
  //     new kakao.maps.Circle({
  //       center: new kakao.maps.LatLng(currentPosition.latitude, currentPosition.longitude),
  //       radius: 8, // 파란색 중심 원 크기
  //       strokeWeight: 3, // 테두리 두께 없음
  //       fillColor: "#0066FF", // 진한 파란색
  //       fillOpacity: 1, // 완전 불투명
  //       map: map, // 표시할 지도 객체
  //     });

  //     // Noise 데이터를 지도에 아이콘으로만 표시
  //     noiseList.forEach((noise) => {
  //       const markerImage = getMarkerImage(noise.avgDecibel); // 마커 이미지 설정
  //       new kakao.maps.Marker({
  //         map: map,
  //         position: new kakao.maps.LatLng(noise.y, noise.x),
  //         image: markerImage, // 지정한 아이콘
  //       });
  //     });
  //   };

  //   const getMarkerImage = (avgDecibel: number) => {
  //     let imageUrl = "";
  //     if (avgDecibel <= 70) {
  //       imageUrl = "/src/assets/icons/ico_marker_green.png";
  //     } else if (avgDecibel <= 100) {
  //       imageUrl = "/src/assets/icons/ico_marker_blue.png";
  //     } else {
  //       imageUrl = "/src/assets/icons/ico_marker_red.png";
  //     }
  //     const imageSize = new kakao.maps.Size(24, 35); // 마커 이미지 크기 설정
  //     return new kakao.maps.MarkerImage(imageUrl, imageSize);
  //   };

  //   const script = document.createElement("script");
  //   script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${JAVASCRIPT_KEY}&libraries=services`;
  //   script.async = true;

  //   script.onload = () => loadKakaoMap();
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, [noiseList]);

  // useEffect(() => {
  //   if (map) {
  //     map.setCenter(new kakao.maps.LatLng(currentPosition.latitude, currentPosition.longitude));
  //   }
  // }, [currentPosition]);

  // if (loading) return <div>로딩 중...</div>;
  // if (error) return <div>{error}</div>;

  if (error) return <div>{error}</div>; 

  return (
    <div>
      {/* 검색바 */}
      <NoiseMapHeader>
        <LocationSearchBar
            value={searchTerm}
            onInputChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isFocused={isFocused}
            onKeyDown={handleKeyDown}
            onBackIconClick={handleBackIconClick}
        />
        {!isFocused && (
          <FilterBtn onClick={handleFilterClick}>
            <img src={FilterIcon} alt="filter_icon" />
            <p>필터</p>
          </FilterBtn>
        )}
      </NoiseMapHeader>
      {isFocused && suggestions.length > 0 && (
        <div>
          <LocationSuggestion
            suggestions={suggestions}
            onSelect={handleAddressSelect}
            searchTerm={searchTerm}
          />
        </div>
      )}
      {!isFocused && coords && (
        <Map
          center={coordinates || { lat: coords.latitude, lng: coords.longitude }}
          style={{ width: "23.4375rem", height: "37.8125rem" }}
          level={3}
        >
          <MapMarker
            position={coordinates || { lat: coords.latitude, lng: coords.longitude }}
            image={{ src: getMarkerImage(), size: { width: 32, height: 32 } }}
          />
        </Map>
      )}
      <AnimatePresence>
        {isBottomSheetOpen && <FilterBottomSheet onClose={handleCloseBottomSheet} />}
      </AnimatePresence>
    </div>
    // <div style={styles.container}>
    //   <div style={styles.searchBox}>
    //     <input
    //       id="searchInput"
    //       type="text"
    //       placeholder="지번, 도로명 주소 검색"
    //       style={styles.searchInput}
    //     />
    //     <button id="searchButton" style={styles.filterButton}>
    //       검색
    //     </button>
    //   </div>
    //   <div id="map" style={styles.map}></div>
    // </div>
  );
};

export default NoiseMap;