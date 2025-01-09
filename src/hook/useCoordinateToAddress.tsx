import { useState, useEffect } from 'react';

const useCoordinateToAddress = (coords: { latitude: number; longitude: number } | null) => {
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (!coords) return;

    const fetchAddress = async () => {
      try {
        const kakao = window.kakao;

        const geocoder = new kakao.maps.services.Geocoder();
        const coord = new kakao.maps.LatLng(coords.latitude, coords.longitude);

        geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const fullAddress = result[0].address.address_name;
            const addressParts = fullAddress.split(' '); // 공백으로 나누기
            const trimmedAddress = addressParts.slice(-2).join(' '); // 뒤에서 두 항목만 결합
            setAddress(trimmedAddress);
          } else {
            setError('주소를 변환하는 데 실패했습니다.');
          }
        });
      } catch (e) {
        setError('카카오맵 API 호출 중 오류가 발생했습니다.');
        console.error(e);
      }
    };

    fetchAddress();
  }, [coords]);

  return { address, error };
};

export default useCoordinateToAddress;