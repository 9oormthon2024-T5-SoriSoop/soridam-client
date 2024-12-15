import React, { useEffect } from "react";

interface NoiseDetailProps {
  noise: {
    id: number;
    x: number; // 경도
    y: number; // 위도
    avgDecibel: number;
    maxDecibel: number;
    createdAt: string;
    review: string;
    locationName?: string;
  };
  onBack: () => void;
}

const NoiseDetail: React.FC<NoiseDetailProps> = ({ noise, onBack }) => {
  const styles = {
    container: {
      padding: "16px",
    },
    backButton: {
      marginBottom: "16px",
      padding: "10px",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      cursor: "pointer",
    },
    header: {
      fontSize: "18px",
      fontWeight: "bold" as const,
      marginBottom: "8px",
    },
    infoBox: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "16px",
      backgroundColor: "#f9f9f9",
    },
    reviewBox: {
      padding: "16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
    },
    map: {
      width: "100%",
      height: "300px",
      marginBottom: "16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
  };

  useEffect(() => {
    const loadKakaoMap = () => {
      const { kakao } = window as any;

      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(noise.y, noise.x),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);

      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(noise.y, noise.x),
        map: map,
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px; font-size:12px;">${noise.locationName || "알 수 없는 위치"}</div>`,
      });
      infowindow.open(map, marker);
    };

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=474943ecc6f14c17466a22ee39f0c57f&libraries=services`;
    script.async = true;

    script.onload = () => loadKakaoMap();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [noise.x, noise.y, noise.locationName]);

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={onBack}>
        뒤로가기
      </button>
      <div id="map" style={styles.map}></div>
      <div style={styles.infoBox}>
        <h1 style={styles.header}>{noise.locationName || "알 수 없는 위치"}</h1>
        <p>생성일: {noise.createdAt}</p>
        <p>평균 데시벨: {noise.avgDecibel} dB</p>
        <p>최대 데시벨: {noise.maxDecibel} dB</p>
      </div>
      <div style={styles.reviewBox}>
        <h3>한줄평</h3>
        <p>{noise.review}</p>
      </div>
    </div>
  );
};

export default NoiseDetail;