import React, { useEffect, useState } from "react";
import ApiService from "../../service/ApiService.js"; // ApiService 가져오기
import NoiseDetail from "../noiseDetail/NoiseDetail"; // NoiseDetail 컴포넌트 가져오기

interface NoiseData {
  id: number;
  x: number;
  y: number;
  avgDecibel: number;
  maxDecibel: number;
  createdAt: string;
  review: string;
  locationName?: string; // 지역 이름 (좌표 변환 결과)
}

const NoiseList: React.FC = () => {
  const [noiseList, setNoiseList] = useState<NoiseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNoiseId, setSelectedNoiseId] = useState<number | null>(null); // 선택된 노이즈 ID 저장

  const userId = 1; // 조회할 사용자 ID
  const REST_API_KEY = "83ce629a6d7b809e79dc0b269d5a78c9"; // 카카오 REST API 키

  const getLocationName = async (x: number, y: number): Promise<string> => {
    const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data?.documents?.length > 0) {
        return data.documents[0].address_name; // 첫 번째 주소 반환
      } else {
        return "알 수 없는 위치";
      }
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
      return "알 수 없는 위치";
    }
  };

  const getMarkerIcon = (avgDecibel: number): string => {
    if (avgDecibel <= 70) {
      return "/src/assets/icons/ico_marker_green.png";
    } else if (avgDecibel <= 100) {
      return "/src/assets/icons/ico_marker_blue.png";
    } else {
      return "/src/assets/icons/ico_marker_red.png";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await ApiService.getUserNoises(userId);
        const enrichedData = await Promise.all(
          response.data.responses.map(async (noise: NoiseData) => {
            const locationName = await getLocationName(noise.x, noise.y);
            return { ...noise, locationName };
          })
        );
        setNoiseList(enrichedData);
      } catch (err) {
        setError("데이터를 가져오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  const styles = {
    card: {
      display: "flex",
      flexDirection: "row" as const,
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid #ccc",
      borderRadius: "12px",
      margin: "10px 0",
      padding: "16px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    icon: {
      width: "40px",
      height: "40px",
      marginRight: "16px",
    },
    content: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      flex: 1,
    },
    header: {
      fontSize: "14px",
      color: "#333",
      marginBottom: "8px",
      textAlign: "center" as const,
    },
    location: {
      fontSize: "16px",
      fontWeight: "bold" as const,
      margin: "4px 0",
    },
    infoContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "8px",
    },
    infoBox: {
      padding: "8px 16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      textAlign: "center" as const,
    },
    infoText: {
      fontSize: "14px",
      fontWeight: "bold" as const,
      color: "#555",
    },
    button: {
      fontSize: "20px",
      fontWeight: "bold" as const,
      color: "#888",
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "none",
    },
  };

  const handleButtonClick = (id: number) => {
    setSelectedNoiseId(id); // 선택된 ID 저장
  };

  const handleBack = () => {
    setSelectedNoiseId(null); // 선택된 ID 초기화 (목록으로 돌아감)
  };

  // NoiseDetail 컴포넌트를 렌더링
  if (selectedNoiseId) {
    const selectedNoise = noiseList.find((noise) => noise.id === selectedNoiseId);
    if (!selectedNoise) return <div>데이터를 찾을 수 없습니다.</div>;

    return <NoiseDetail noise={selectedNoise} onBack={handleBack} />;
  }

  // NoiseList 렌더링
  return (
    <div>
      {noiseList.map((noise) => (
        <div key={noise.id} style={styles.card}>
          <img
            src={getMarkerIcon(noise.avgDecibel)}
            alt="소음 아이콘"
            style={styles.icon}
          />
          <div style={styles.content}>
            <div style={styles.header}>
              <span>{noise.createdAt}</span>
              <h3 style={styles.location}>{noise.locationName}</h3>
            </div>
            <div style={styles.infoContainer}>
              <div style={styles.infoBox}>
                <span style={styles.infoText}>평균: {noise.avgDecibel} dB</span>
              </div>
              <div style={styles.infoBox}>
                <span style={styles.infoText}>최대: {noise.maxDecibel} dB</span>
              </div>
            </div>
          </div>
          <button
            style={styles.button}
            onClick={() => handleButtonClick(noise.id)}
          >
            &gt;
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoiseList;