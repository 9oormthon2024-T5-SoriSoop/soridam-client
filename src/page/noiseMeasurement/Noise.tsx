import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/logo.svg';
import Info from '../../assets/icons/ico_Info.png';
import { useDispatch } from 'react-redux';
import { ChartContainer, Container, DescriptionWrapper, Header, InfoHeader, InfoWrapper, LogoWrapper } from './Noise.styles';
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
import { DecibelDataPoint } from '../../types/DecibelDataPoint';
import DecibelChart from '../../component/decibelChart/DecibelChart';
import Timer from '../../component/timer/Timer';

const Noise = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { startMeasuringDecibel, stopMeasuringDecibel, decibel } = useRecordWithDecibel();
    const [maxDecibel, setMaxDecibel] = useState<number>(0);
    const [averageDecibel, setAverageDecibel] = useState<number>(0);
    const [dataPoints, setDataPoints] = useState<DecibelDataPoint[]>([]);
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
        const timestamp = new Date().toISOString();
            const currentDecibel = decibel === -Infinity ? 0 : decibel; // Set 0 if decibel is -Infinity
            setDataPoints((prev) => [...prev.slice(-49), { x: timestamp, y: currentDecibel }]); // Keep last 50 data points
            if (currentDecibel > maxDecibel) {
                setMaxDecibel(currentDecibel);
            }
      }
    }, [decibel, isRecording]);
  
    useEffect(() => {
        if (dataPoints.length > 0) {
            const totalDecibels = dataPoints.reduce((sum, point) => sum + point.y, 0);
            const average = totalDecibels / dataPoints.length;
            setAverageDecibel(average);
        }
    }, [dataPoints]);

    const handleTimerComplete = () => {
      console.log('타이머 완료');
    };

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
        <DecibelChart
          decibel={decibel}
          dataPoints={dataPoints}
          averageDecibel={averageDecibel}
          maxDecibel={maxDecibel}
        />
        <DescriptionWrapper>
          <p>소음 측정을 시작할 준비가 됐어요!</p>
          <p>평균값을 얻으려면 15초 동안 측정해볼게요.</p>
          <Timer 
            initialCountdown={15}
            isActive={isRecording}
            onComplete={handleTimerComplete}
          />
        </DescriptionWrapper>
      </ChartContainer>
    </Container>
  );
};

export default Noise;