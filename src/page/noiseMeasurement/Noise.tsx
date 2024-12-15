import React, { useEffect, useState } from 'react';
import DecibelChart from '../../component/decibelChart/DecibelChart';
import { useDispatch } from 'react-redux';
import { setPosition } from '../../store/data/dataSlice';

const Noise = () => {
  const [address, setAddress] = useState<string>('');
  const dispatch = useDispatch();

  const fetchAddressFromCoords = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log('위도:', latitude, '경도:', longitude);
        dispatch(setPosition({x: latitude, y: longitude}));

        const REST_API_KEY = '83ce629a6d7b809e79dc0b269d5a78c9'; // 카카오 REST API 키
        const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;

        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              Authorization: `KakaoAK ${REST_API_KEY}`, // 인증 헤더
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          if (data && data.documents && data.documents.length > 0) {
            let address = data.documents[0].address_name; // 첫 번째 주소를 가져옴
            console.log('주소:', address);
            address = address.slice(0, 7);
            setAddress(address); // 화면에 주소 표시
          } else {
            console.error('주소 데이터를 찾을 수 없습니다.');
          }
        } catch (error) {
          console.error('API 호출 중 오류 발생:', error);
        }
      },
      (error) => {
        console.error('위치 정보를 가져오는 중 오류 발생:', error);
      }
    );
  };

  useEffect(() => {
    fetchAddressFromCoords(); // 컴포넌트가 마운트될 때 호출
  }, []);



  return (
    <div>
      <DecibelChart address={address}/>
    </div>
  );
};

export default Noise;