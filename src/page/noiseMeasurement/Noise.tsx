import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/logo.svg';
import Info from '../../assets/icons/ico_Info.png';
import { useDispatch } from 'react-redux';
import { ChartContainer, Container, Header, InfoWrapper, LogoWrapper } from './Noise.styles';
import { toggleModal } from '../../store/menu/menuSlice';
import DateTimeDisplay from '../../component/time/DateTimeDisplay';
import useCurrentLocation from '../../hook/useCurrentLocation';
import useCoordinateToAddress from '../../hook/useCoordinateToAddress';
import AddressDisplay from '../../component/currentLocate/AddressDisplay';
import useResetStateOnPath from '../../hook/useResetStateOnPath';
import { useAppSelector } from '../../hook/redux';
import { RootState } from '../../store';

const Noise = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
  
    const { coords, error: locationError } = useCurrentLocation();
    const { address, error: addressError } = useCoordinateToAddress(coords);

    const { isFixed, fixedDate } = useAppSelector((state: RootState) => state.dateTime);

    useResetStateOnPath('/measure');

    useEffect(() => {
      if (!isFixed) {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
      }
    }, [isFixed]);

  const displayDate = isFixed && fixedDate ? fixedDate : currentDate;

  //const [address, setAddress] = useState<string>('');
  const dispatch = useDispatch();

  // const fetchAddressFromCoords = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     async (position) => {
  //       const { latitude, longitude } = position.coords;
  //       console.log('위도:', latitude, '경도:', longitude);
  //       dispatch(setPosition({x: latitude, y: longitude}));

  //       const REST_API_KEY = '83ce629a6d7b809e79dc0b269d5a78c9'; // 카카오 REST API 키
  //       const url = `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`;

  //       try {
  //         const response = await fetch(url, {
  //           method: 'GET',
  //           headers: {
  //             Authorization: `KakaoAK ${REST_API_KEY}`, // 인증 헤더
  //           },
  //         });

  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }

  //         const data = await response.json();
  //         if (data && data.documents && data.documents.length > 0) {
  //           let address = data.documents[0].address_name; // 첫 번째 주소를 가져옴
  //           console.log('주소:', address);
  //           address = address.slice(0, 7);
  //           setAddress(address); // 화면에 주소 표시
  //         } else {
  //           console.error('주소 데이터를 찾을 수 없습니다.');
  //         }
  //       } catch (error) {
  //         console.error('API 호출 중 오류 발생:', error);
  //       }
  //     },
  //     (error) => {
  //       console.error('위치 정보를 가져오는 중 오류 발생:', error);
  //     }
  //   );
  // };

  // useEffect(() => {
  //   fetchAddressFromCoords(); // 컴포넌트가 마운트될 때 호출
  // }, []);



  return (
    <Container>
      <Header>
        <LogoWrapper>
          <img src={Logo} alt='logo'/>
        </LogoWrapper>
        <InfoWrapper onClick={() => dispatch(toggleModal(true))}>
          <img src={Info} alt='info'/>
        </InfoWrapper>
      </Header>
      <ChartContainer>
        <div>
          <DateTimeDisplay date={displayDate}/>
          <AddressDisplay address={address} locationError={locationError} addressError={addressError} />
        </div>
        {/* <DecibelChart/> */}
      </ChartContainer>
    </Container>
  );
};

export default Noise;