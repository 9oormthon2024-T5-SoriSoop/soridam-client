import { useState, useEffect } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const useCurrentLocation = () => {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ latitude, longitude });
        },
        (err) => {
          setError('위치를 가져오는 데 실패했습니다.');
          console.error(err);
        }
      );
    } else {
      setError('브라우저가 위치 서비스를 지원하지 않습니다.');
    }
  }, []);

  return { coords, error };
};

export default useCurrentLocation;