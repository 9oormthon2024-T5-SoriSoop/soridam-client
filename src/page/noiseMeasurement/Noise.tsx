import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/logo.svg';
import Info from '../../assets/icons/ico_Info.png';
import { useDispatch } from 'react-redux';
import { ChartContainer, Container, DescriptionWrapper, Header, InfoHeader, InfoWrapper, LogoWrapper, StyledToastContainer } from './Noise.styles';
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
import MeasureBtn from '../../component/measureBtn/MeasureBtn';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Noise = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isCompleted, setIsCompleted] = useState(false);
    const { startMeasuringDecibel, stopMeasuringDecibel, decibel } = useRecordWithDecibel();
    const [currentDecibel, setCurrentDecibel] = useState<number>(0);
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

    const dispatch = useDispatch();

    const handleStart = () => {
      dispatch(toggleRecording());
      startMeasuringDecibel();
      setIsCompleted(false); // 타이머 완료 상태 초기화
    };
  
    const handleCancel = () => {
      dispatch(toggleRecording());
      stopMeasuringDecibel();
      setIsCompleted(false); // 타이머 완료 상태 초기화
      setDataPoints([]); // 데이터 초기화
      setMaxDecibel(0); // 최대 데시벨 초기화
      setAverageDecibel(0); // 평균 데시벨 초기화
      setCurrentDecibel(0); // 현재 데시벨 초기화
      // Toast 메시지 표시
      toast.info('측정이 취소되었습니다.', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
      });
    };
  
    const handleComplete = () => {
      setIsCompleted(true);
    };
  
    const handleRegister = () => {
      console.log('데이터 등록 완료');
      handleCancel(); // 등록 후 초기화
    };

    useEffect(() => {
      if (!isRecording) {
        setIsCompleted(false); // 측정 중지 시 완료 상태 초기화
        setDataPoints([]); // 그래프 데이터 초기화
        setMaxDecibel(0); // 최대 데시벨 초기화
        setAverageDecibel(0); // 평균 데시벨 초기화
      }
    }, [isRecording]);

    useEffect(() => {
      if (isRecording) {
        const timestamp = new Date().toISOString();
            const currentDecibel = decibel === -Infinity ? 0 : decibel; // Set 0 if decibel is -Infinity
            setCurrentDecibel(currentDecibel);
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
      <ChartContainer isRecording={isRecording}>
        <InfoHeader>
          <DateTimeDisplay date={displayDate}/>
          <AddressDisplay address={address} locationError={locationError} addressError={addressError} />
        </InfoHeader>
        <Marker averageDecibel={averageDecibel} isRecording={isRecording} />
        <DecibelChart
          decibel={currentDecibel}
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
            onComplete={handleComplete}
          />
        </DescriptionWrapper>
      </ChartContainer>
      <MeasureBtn
          isRecording={isRecording}
          isCompleted={isCompleted}
          onStart={handleStart}
          onCancel={handleCancel}
          onRegister={handleRegister}
      />
      <StyledToastContainer />
    </Container>
  );
};

export default Noise;