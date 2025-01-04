import React, { useEffect, useState } from 'react';
import useRecordWithDecibel from '../../hook/useRecordWithDecibel';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { AverageDecibelWrapper, CancelBtn, ChartBtn, ChartContainer, ChartWrapper, CurrentDecibelWrapper, DateAndPositionContainer, DateWrapper, DecibelContainer, Header, InfoWrapper, MarkerWrapper, MaxDecibelWrapper, PositionWrapper, SaveBtn } from './DecibelChart.styles';
import MarkerDefault from '../../assets/icons/ico_marker_default.png';
import MarkerGreen from '../../assets/icons/ico_marker_green.png';
import MarkerBlue from '../../assets/icons/ico_marker_blue.png';
import MarkerRed from '../../assets/icons/ico_marker_red.png';
import LocateIcon from '../../assets/icons/ico_locate.png';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDecibel } from '../../store/data/dataSlice';
// import { toggleModal } from '../../store/menu/menuSlice';

Chart.register(...registerables);

interface DecibelDataPoint {
    x: string;
    y: number;
}

interface DecibelMeterProps {
    address: string; // address를 props로 받음
}

const DecibelMeter: React.FC<DecibelMeterProps> = () => {
    // const { startMeasuringDecibel, stopMeasuringDecibel, decibel } = useRecordWithDecibel();
    const [isRecording, setIsRecording] = useState(false);
    const [dataPoints, setDataPoints] = useState<DecibelDataPoint[]>([]); // Change to store time and decibel
    const [averageDecibel, setAverageDecibel] = useState<number>(0);
    const [maxDecibel, setMaxDecibel] = useState<number>(0); 
    const [currentTime, setCurrentTime] = useState<string>("");
    const [fixedTime, setFixedTime] = useState<string | null>(null);
    const [isTimeFixed, setIsTimeFixed] = useState<boolean>(false); // 시간이 고정되었는지 여부


    const dispatch = useDispatch();

    // 실시간 시간을 업데이트하는 useEffect
    useEffect(() => {
      if (isTimeFixed) return; // 시간이 고정된 경우 업데이트 멈춤
  
      const updateTime = () => {
        const now = new Date();
        const formattedTime = formatDateTime(now); // 초를 포함한 시간 형식
        setCurrentTime(formattedTime);
      };
  
      updateTime(); // 초기 시간 설정
      const interval = setInterval(updateTime, 1000); // 1초마다 업데이트
  
      return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
    }, [isTimeFixed]); // isTimeFixed가 바뀔 때마다 실행
  
    // 버튼 클릭 시 고정 시간 설정
    const handleButtonClick = () => {
      if (!isTimeFixed) {
        setFixedTime(currentTime); // 현재 시간을 고정
        setIsTimeFixed(true); // 시간이 고정되었음을 표시
      }
    };
  
    // 시간 포맷 함수 (초 추가)
    const formatDateTime = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}.${month}.${day} ${hours}:${minutes}`;  // 초 포함
    };

  const handleToggleRecording = () => {
    if (isRecording) {
      stopMeasuringDecibel();
      handleButtonClick(); // recording 중지 시에도 시간 고정 버튼 클릭
    } else {
      startMeasuringDecibel();
      handleButtonClick(); // recording 시작 시 시간 고정
    }
    setIsRecording(!isRecording);
  };
    // Update chart data with timestamp
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

    // Average decibel calculation (optional, if you want to track the average)
    useEffect(() => {
        if (dataPoints.length > 0) {
            const totalDecibels = dataPoints.reduce((sum, point) => sum + point.y, 0);
            const average = totalDecibels / dataPoints.length;
            setAverageDecibel(average);
        }
    }, [dataPoints]);

    // Chart.js data and options
    const chartData = {
        datasets: [
            {
                label: 'Decibel Level (dB)',
                data: dataPoints,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#007bff',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                  display: false, // x축 라벨 숨기기
                },
                grid: {
                    display: false, // x축 그리드 숨기기 (선택 사항)
                },
            },
            y: {
                min: 0,
                max: 120, // Adjust range as needed
                title: {
                    display: false,
                    text: 'Decibel Level (dB)',
                },
            },
        },
        elements: {
           point: {
                radius: 0, // 데이터 점(dot) 제거
            }
        },
        plugins: {
            legend: {
                display: false, // 범례 표시 여부
            }
        }
    };

    

  return (
    // <ChartContainer>
    //     {/* <Header>
    //         <div>
    //             <img src={Logo} alt='logo' />
    //         </div>
    //         <div onClick={() => dispatch(toggleModal(true))}>
    //             <img src={Info} alt='info' />
    //         </div>            
    //     </Header> */}
    //     <ChartWrapper>
    //         <DateAndPositionContainer>
    //             <DateWrapper>
    //                 {fixedTime ? `${fixedTime}` : `${currentTime}`}
    //             </DateWrapper>
    //             <PositionWrapper>
    //                 <img src={LocateIcon} alt='positionMarker' />
    //                 {address}
    //             </PositionWrapper>
    //         </DateAndPositionContainer>
    //         <MarkerWrapper>
    //             { isRecording && averageDecibel < 70 ? <img src={MarkerGreen} alt='marker' /> 
    //                 : isRecording && averageDecibel < 100 ? <img src={MarkerBlue} alt='marker' /> 
    //                     : isRecording && averageDecibel < 120 ? <img src={MarkerRed} alt='marker'/> 
    //                         : <img src={MarkerDefault} alt='marker' /> }
    //         </MarkerWrapper>
    //         <DecibelContainer>
    //             <AverageDecibelWrapper>
    //                 <p>평균</p>
    //                 <p>{averageDecibel.toFixed(0)}</p>
    //             </AverageDecibelWrapper>
    //             <CurrentDecibelWrapper>
    //                 <p>
    //                 { isRecording && averageDecibel < 70 ? "조용함" 
    //                 : isRecording && averageDecibel < 100 ? "보통" 
    //                     : isRecording && averageDecibel < 120 ? "시끄러움" 
    //                         : "측정 전" }  
    //                 </p>
    //                 <p>현재 {decibel.toFixed(0)}dB</p>
    //             </CurrentDecibelWrapper>
    //             <MaxDecibelWrapper>
    //                 <p>최대</p>
    //                 <p>{maxDecibel.toFixed(0)}</p>
    //             </MaxDecibelWrapper>
    //         </DecibelContainer>
        //     <Line data={chartData} options={options} style={{ width: '100%', height: '172px' }}  />
        //     <InfoWrapper>
        //         <p>소음 측정을 시작할 준비가 됐어요</p>
        //         <p>잠시만 기다려주세요. 평균값을 계산 중입니다.</p>
        //     </InfoWrapper>
        // // </ChartWrapper>
        // {isRecording ? (
        //         <>
        //             <NavLink to='/register'>
        //                 <SaveBtn onClick={()=>{dispatch(setDecibel({maxdB: maxDecibel.toFixed(0), averagedB: averageDecibel.toFixed(0), date: fixedTime }))}}>
        //                     측정 저장
        //                 </SaveBtn>
        //             </NavLink>
        //             <CancelBtn onClick={handleToggleRecording}>
        //                 취소
        //             </CancelBtn>
        //         </>
        //     ) : (
        //         <ChartBtn onClick={handleToggleRecording}>
        //             측정 시작
        //         </ChartBtn>
        //     )
        // }
    // </ChartContainer>
    <div></div>
  );
};

export default DecibelMeter;