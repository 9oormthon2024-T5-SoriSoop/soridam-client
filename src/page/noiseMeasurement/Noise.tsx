import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/logo.svg';
import Info from '../../assets/icons/ico_Info.png';
import { useDispatch } from 'react-redux';
import { ChartContainer, Container, Header, InfoHeader, InfoWrapper, LogoWrapper } from './Noise.styles';
import { toggleModal } from '../../store/menu/menuSlice';
import DateTimeDisplay from '../../component/time/DateTimeDisplay';
import useCurrentLocation from '../../hook/useCurrentLocation';
import useCoordinateToAddress from '../../hook/useCoordinateToAddress';
import AddressDisplay from '../../component/currentLocate/AddressDisplay';
import useResetStateOnPath from '../../hook/useResetStateOnPath';
import { useAppSelector } from '../../hook/redux';
import { RootState } from '../../store';
import Marker from '../../component/marker/Marker';
import { toggleRecording } from '../../store/dateTime/dateTimeSlice';
import useRecordWithDecibel from '../../hook/useRecordWithDecibel';

const Noise = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { startMeasuringDecibel, stopMeasuringDecibel, decibel } = useRecordWithDecibel();
    const [averageDecibel, setAverageDecibel] = useState<number>(0);
    const [dataPoints, setDataPoints] = useState<number[]>([]);
    const { coords, error: locationError } = useCurrentLocation();
    const { address, error: addressError } = useCoordinateToAddress(coords);

    const { isRecording, fixedDate } = useAppSelector((state: RootState) => state.dateTime);

    useResetStateOnPath('/measure');

    useEffect(() => {
      if (!isRecording) {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
      }
    }, [isRecording]);

    const displayDate = isRecording && fixedDate ? fixedDate : currentDate;

    //const [address, setAddress] = useState<string>('');
    const dispatch = useDispatch();

    const handleToggleRecording = () => {
      dispatch(toggleRecording());
      if (!isRecording) {
        startMeasuringDecibel();
      } else {
        stopMeasuringDecibel();
      }
    };

    useEffect(() => {
      if (isRecording) {
        setDataPoints((prev) => [...prev.slice(-49), decibel]); // 최근 50개의 데시벨 데이터 유지
      }
    }, [decibel, isRecording]);
  
    useEffect(() => {
      if (dataPoints.length > 0) {
        const total = dataPoints.reduce((sum, value) => sum + value, 0);
        setAverageDecibel(total / dataPoints.length);
      }
    }, [dataPoints]);

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
        <InfoHeader>
          <DateTimeDisplay date={displayDate}/>
          <AddressDisplay address={address} locationError={locationError} addressError={addressError} />
        </InfoHeader>
        <Marker averageDecibel={averageDecibel} isRecording={isRecording} />
        {/* <DecibelChart/> */}
      </ChartContainer>
    </Container>
  );
};

export default Noise;