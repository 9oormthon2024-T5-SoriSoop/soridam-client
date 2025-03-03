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
import { CategoryCode } from "../../types/CategoryCode";
import LocationDetailBottomSheet from "../../component/locationDetailBottomSheet/LocationDetailBottomSheet";

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

// 카테고리를 통한 여러 MapMarker를 뿌리기 위한 정보 type
interface PlaceData {
  id: string;
  place_name: string;
  x: number; // 경도
  y: number; // 위도
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
  const [isFilterBottomSheetOpen, setIsFilterBottomSheetOpen] = useState(false);
  const [noiseList, setNoiseList] = useState<NoiseData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false); // 닫힘 애니메이션 상태
  const [category, setCategory] = useState<CategoryCode[]>([]);  // 카테고리를 받아와 맵검색을 위한 특정 키워드로 변경
  const [mapLv, setMapLv] = useState<number>(3); // map의 주변 범위 Lv 설정
  const [mapMarkers, setMapMarkers] = useState<PlaceData[]>([]); // 필터 적용시 마커 클러스터
  const [isLocationBSOpen, setIsLocationBSOpen] = useState<boolean>(false); // 마커 클릭 이벤트 관리
  const [selectedMarker, setSelectedMarker] = useState<NoiseData | null>(null); // 선택된 마커 데이터

  //marker: NoiseData (매개변수 noiseData)
  const handleMarkerClick = () => {
    // setSelectedMarker(marker); // 선택된 마커 정보 저장
    setIsLocationBSOpen(true); // bottom sheet 열기
  };
  
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
    setIsClosing(false);
    setIsFilterBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    // 닫기 애니메이션이 완료된 후 상태를 업데이트
    setTimeout(() => setIsFilterBottomSheetOpen(false), 300); // exit 애니메이션 지속 시간과 동일
  };

  // 선택된 카테고리를 map에 적용시킬 키워드로 변환시키고, map Lv 설정정
  const handleCategoryKeyword = (categoryKeyword: string[], radius: string | null) => {
    console.log("📌 전달받은 categoryKeyword:", categoryKeyword);
    if(categoryKeyword.length !== 0 ) {
      const allCategory: CategoryCode[] = [];
      for (let i = 0; i < categoryKeyword.length; i++) {
        if (categoryKeyword[i] === "cafe") {
          allCategory.push("CE7");  
        } else if (categoryKeyword[i] === "cutlery") {
          allCategory.push("FD6");
        } else if (categoryKeyword[i] === "culture") {
          allCategory.push("CT1");
        } else if (categoryKeyword[i] === "tour") {
          allCategory.push("AT4");
        }
      }
      console.log("✅ 변환된 카테고리 코드:", allCategory);
      setCategory(allCategory);
    } 
    if (radius === "500m") setMapLv(6);
    else if (radius === "1km") setMapLv(7);
    else if (radius === "2km") setMapLv(8);
    else setMapLv(3); // 기본값
  }

  useEffect(() => {
    if (!coords || category.length === 0 || !window.kakao) return;
  
    const { kakao } = window;
    const ps = new kakao.maps.services.Places();
    
    const searchCategory = async () => {
      const allMarkers: PlaceData[] = [];
      
      await Promise.all(
        category.map((catCode) => {
          return new Promise<void>((resolve) => {
            ps.categorySearch(
              catCode,
              (data, status) => {
                if (status === kakao.maps.services.Status.OK) {
                  const newMarkers = data.map((place) => ({
                    id: place.id,
                    place_name: place.place_name,
                    x: Number(place.x),
                    y: Number(place.y),
                  }));
                  allMarkers.push(...newMarkers);
                }
                resolve(); // 비동기 호출 완료
              },
              { location: new kakao.maps.LatLng(coords.latitude, coords.longitude) }
            );
          });
        })
      );
  
      setMapMarkers(allMarkers); // 모든 검색 완료 후 상태 업데이트
    };
  
    searchCategory();
  }, [coords, category]);

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
          level={mapLv}
        >
          {mapMarkers.map((marker) => (
            <MapMarker
              key={marker.id}
              image={{ src: MarkerDefault, size: { width: 32, height: 32 } }}
              position={{ lat: marker.y, lng: marker.x }}
              clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              onClick={() => handleMarkerClick()} // 클릭 이벤트 추가
            />
          ))}
          <MapMarker
            position={coordinates || { lat: coords.latitude, lng: coords.longitude }}
            image={{ src: getMarkerImage(), size: { width: 32, height: 32 } }}
            clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
            onClick={() => handleMarkerClick()} // 클릭 이벤트 추가
          />
        </Map>
      )}
      <AnimatePresence>
        {isFilterBottomSheetOpen && <FilterBottomSheet onClose={handleCloseBottomSheet} setIsClosing={setIsClosing} isClosing={isClosing} handleCategoryKeyword={handleCategoryKeyword} />}
      </AnimatePresence>
      {isLocationBSOpen && (
        <LocationDetailBottomSheet 
          isOpen={isLocationBSOpen} 
          onClose={() => setIsLocationBSOpen(false)}
          // data={selectedMarker} // 선택된 마커 정보 전달
        />
      )}
    </div>
  );
};

export default NoiseMap;