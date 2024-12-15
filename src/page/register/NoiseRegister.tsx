import React, { useState, useEffect } from 'react';
import useKakaoLoader from '../../hook/useKakaoLoader';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import BackIcon from '../../assets/icons/ico_navigate_back.png';
import { useAppSelector } from '../../hook/redux';
import { setPosition } from '../../store/data/dataSlice';
import { useDispatch } from 'react-redux';
import MarkerGreen from '../../assets/icons/ico_marker_green.png';
import MarkerBlue from '../../assets/icons/ico_marker_blue.png';
import MarkerRed from '../../assets/icons/ico_marker_red.png';
import { AddressWrapper, AveragedBWrapper, DateWrapper, DecibelContainer, DecibelWrapper, InfoContainer, InfoWrapper, MarkerWrapper, MaxdBWrapper, RegisterBtn, ReviewWrapper } from './NoiseRegister.styles';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


type LatLng = {
  lat: number;
  lng: number;
};

const NoiseRegister = () => {
  const [currentPosition, setCurrentPosition] = useState<LatLng>({ lat: 0, lng: 0 });
  const [address, setAddress] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const { locate, decibel } = useAppSelector((state) => state.data);
  const API_BASE_URL = "https://63c2-59-18-161-28.ngrok-free.app/api";
  const dispatch = useDispatch();

  const data = {
    x: locate.x,
    y: locate.y,
    avgDecibel: decibel.averagedB,
    maxDecibel: decibel.maxdB,
    review: value,
  }

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


  // Load Kakao Map
  useKakaoLoader();

  // Fetch user location once on component mount
  useEffect(() => {
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => console.error('Geolocation error:', error),
        { enableHighAccuracy: true }
      );
    };

    fetchLocation();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
        <NavLink to={'/measure'}>
          <div>
            <img src={BackIcon} alt='backIcon' />
          </div>
        </NavLink>
        <Map
            id="map"
            center={{
                lat: currentPosition.lat,
                lng: currentPosition.lng,
            }}
            style={{
                width: '100%',
                height: '160px',
            }}
            level={3} // Zoom level
            >
            <MapMarker
                position={{
                lat: currentPosition.lat,
                lng: currentPosition.lng,
                }}
            />
        </Map>
        <InfoContainer>
          <InfoWrapper>
            <AddressWrapper>{address}</AddressWrapper>
            <DateWrapper>{decibel.date}</DateWrapper>
          </InfoWrapper>
          { decibel.averagedB < 70 ? (
                <MarkerWrapper>
                  <img src={MarkerGreen} alt='markerG'/>
                  <div>
                    조용함
                  </div>
                </MarkerWrapper>
            ) 
                    : decibel.averagedB < 100 ? (
                      <MarkerWrapper>
                        <img src={MarkerBlue} alt='markerB'/>
                        <div>
                          보통
                        </div>
                      </MarkerWrapper>
                      ) 
                        : (
                          <MarkerWrapper>
                            <img src={MarkerRed} alt='markerR'/>
                            <div>
                              시끄러움
                            </div>
                          </MarkerWrapper>
                          )  }
        </InfoContainer>
        <DecibelContainer>
          <p>소음 측정 결과</p>
          <DecibelWrapper>
            <AveragedBWrapper>
              평균 {decibel.averagedB}
            </AveragedBWrapper>
            <MaxdBWrapper>
              최대 {decibel.maxdB}
            </MaxdBWrapper>
          </DecibelWrapper>
        </DecibelContainer>
        <ReviewWrapper>
          <p>한줄평</p>
          <div>
          <textarea id="comment" 
            placeholder="소음 상황을 최대 150자 이내로 간단히 작성해주세요."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>             
          </div>
        </ReviewWrapper>
        <RegisterBtn onClick={() => 
          axios.post(`${API_BASE_URL}/noises`, data)
            .then(response => {
              console.log('Response:', response.data);
            }).catch(error => {
              console.error('Error:', error);
            })}>
          등록하기
        </RegisterBtn>
    </div>
  );
};

export default NoiseRegister;