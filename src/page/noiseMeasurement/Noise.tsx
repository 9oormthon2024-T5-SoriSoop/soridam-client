import { useEffect, useState } from 'react';
import Logo from '../../assets/logo/logo.svg';
import Info from '../../assets/icons/ico_Info.png';
import { useDispatch } from 'react-redux';
import { ChartContainer, Container, DescriptionWrapper, Header, InfoHeader, InfoWrapper, LogoWrapper, StyledToastContainer } from './Noise.styles';
import { toggleInfoModal } from '../../store/menu/menuSlice';
import DateTimeDisplay from '../../component/time/DateTimeDisplay';
import useCurrentLocation from '../../hook/useCurrentLocation';
import useCoordinateToAddress from '../../hook/useCoordinateToAddress';
import AddressDisplay from '../../component/currentLocate/AddressDisplay';
import useResetStateOnPath from '../../hook/useResetStateOnPath';
import { useAppSelector } from '../../hook/redux';
import { RootState } from '../../store';
import Marker from '../../component/marker/Marker';
import { setFixedDate, toggleRecording } from '../../store/dateTime/dateTimeSlice';
import useRecordWithDecibel from '../../hook/useRecordWithDecibel';
import { DecibelDataPoint } from '../../types/DecibelDataPoint';
import DecibelChart from '../../component/decibelChart/DecibelChart';
import Timer from '../../component/timer/Timer';
import MeasureBtn from '../../component/measureBtn/MeasureBtn';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { setNoiseData } from '../../store/noise/noiseSlice';
import { useNavigate } from 'react-router-dom';

const Noise = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isCompleted, setIsCompleted] = useState(false);
    const { startMeasuringDecibel, stopMeasuringDecibel, decibel } = useRecordWithDecibel();
    const [currentDecibel, setCurrentDecibel] = useState<number>(0);
    const [measuredMaxDecibel, setMeasuredMaxDecibel] = useState<number>(0);
    const [measuredAverageDecibel, setMeasuredAverageDecibel] = useState<number>(0);
    const [totalDecibelSum, setTotalDecibelSum] = useState<number>(0); // 누적 합계
    const [totalDataPoints, setTotalDataPoints] = useState<number>(0); // 데이터 포인트 수
    const [dataPoints, setDataPoints] = useState<DecibelDataPoint[]>([]);
    const { coords, error: locationError } = useCurrentLocation();
    const { address, error: addressError } = useCoordinateToAddress(coords);

    const { isRecording, fixedDate } = useAppSelector((state: RootState) => state.dateTime);
    const { maxDecibel, averageDecibel } = useAppSelector((state: RootState) => state.noise);
    useResetStateOnPath('/');

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
    const navigate = useNavigate();


    const handleStart = () => {
      dispatch(setFixedDate()); // 녹음 시작 시 현재 시간으로 fixedDate 설정
      dispatch(toggleRecording());
      startMeasuringDecibel();
      setIsCompleted(false); // 타이머 완료 상태 초기화
    };
  
    const handleCancel = () => {
      dispatch(toggleRecording());
      stopMeasuringDecibel();
      setIsCompleted(false); // 타이머 완료 상태 초기화
      setDataPoints([]); // 데이터 초기화
      setMeasuredMaxDecibel(0); // 최대 데시벨 초기화
      setMeasuredAverageDecibel(0); // 평균 데시벨 초기화
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
      if (!coords) {
        toast.error('위치를 가져오는 데 실패했습니다.', { position: 'bottom-center' });
        return;
      }
  
      toast.success('저장 완료! 다음 단계로 이동합니다.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeButton: true,
      });
  
      dispatch(
        setNoiseData({
          maxDecibel: measuredMaxDecibel,
          averageDecibel: measuredAverageDecibel,
          latitude: coords.latitude,
          longitude: coords.longitude,
        })
      );
  
      // 측정 상태 초기화
      dispatch(toggleRecording()); // 녹음 상태 초기화
      setIsCompleted(false); // 완료 상태 초기화
      setDataPoints([]); // 데이터 초기화
      setMeasuredMaxDecibel(0); // 최대 데시벨 초기화
      setMeasuredAverageDecibel(0); // 평균 데시벨 초기화
      setCurrentDecibel(0); // 현재 데시벨 초기화

      setTimeout(() => {
        navigate('/register');
      }, 1000);
    };

    useEffect(() => {
      if (!isRecording) {
        setIsCompleted(false); // 측정 중지 시 완료 상태 초기화
        setDataPoints([]); // 그래프 데이터 초기화
        setMeasuredMaxDecibel(0); // 최대 데시벨 초기화
        setMeasuredAverageDecibel(0); // 평균 데시벨 초기화
      }
    }, [isRecording]);

    useEffect(() => {
      if (isRecording) {
        const current = decibel === -Infinity ? 0 : decibel;
        setCurrentDecibel(current);
    
        // 로컬 최대 데시벨 업데이트
        if (current > measuredMaxDecibel) {
          setMeasuredMaxDecibel(current);
        }
    
        // 누적 합계 및 평균 계산
        const newTotalDecibelSum = totalDecibelSum + current;
        const newTotalDataPoints = totalDataPoints + 1;
    
        setTotalDecibelSum(newTotalDecibelSum); // 누적 합계 업데이트
        setTotalDataPoints(newTotalDataPoints); // 데이터 포인트 수 업데이트
        setMeasuredAverageDecibel(newTotalDecibelSum / newTotalDataPoints); // 평균 계산 및 업데이트
    
        // 데이터 포인트 추가
        setDataPoints((prevDataPoints) => [
          ...prevDataPoints,
          { x: new Date().toISOString(), y: current },
        ]);
      }
    }, [decibel, isRecording, totalDecibelSum, totalDataPoints, measuredMaxDecibel]);

    useEffect(() => {
      // 측정 중이 아니라면 /measure로 리다이렉트
      if (!maxDecibel && !averageDecibel) {
        navigate('/');
      }
    }, [maxDecibel, averageDecibel, navigate]);


  return (
    <Container>
      <Header>
        <LogoWrapper>
          <img src={Logo} alt='logo'/>
        </LogoWrapper>
        <InfoWrapper onClick={() => dispatch(toggleInfoModal(true))}>
          <img src={Info} alt='info'/>
        </InfoWrapper>
      </Header>
      <ChartContainer isRecording={isRecording}>
        <InfoHeader>
          <DateTimeDisplay date={displayDate}/>
          <AddressDisplay address={address} locationError={locationError} addressError={addressError} />
        </InfoHeader>
        <Marker averageDecibel={measuredAverageDecibel} isRecording={isRecording} />
        <DecibelChart
          decibel={currentDecibel}
          dataPoints={dataPoints}
          averageDecibel={measuredAverageDecibel}
          maxDecibel={measuredMaxDecibel}
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