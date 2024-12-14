import React, { useEffect, useState } from 'react';
import useRecordWithDecibel from '../../hook/useRecordWithDecibel';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { DateWrapper } from './DecibelChart.styles';

Chart.register(...registerables);

const DecibelMeter = () => {
    const { startMeasuringDecibel, stopMeasuringDecibel, decibel } = useRecordWithDecibel();
    const [isRecording, setIsRecording] = useState(false);
    const [dataPoints, setDataPoints] = useState<{ x: string, y: number }[]>([]); // Change to store time and decibel
    const [averageDecibel, setAverageDecibel] = useState<number>(0);
    const [maxDecibel, setMaxDecibel] = useState<number>(0); 
    const [currentTime, setCurrentTime] = useState<string>("");
    const [fixedTime, setFixedTime] = useState<string | null>(null);
    const [isTimeFixed, setIsTimeFixed] = useState<boolean>(false); // 시간이 고정되었는지 여부

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
        const seconds = String(date.getSeconds()).padStart(2, "0");  // 초 추가
        return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;  // 초 포함
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
                borderColor: 'rgba(75,192,192,1)',
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
    <div className="App">
      <h2>Decibel Meter</h2>
      <button onClick={handleToggleRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <p>Current Decibel: {decibel.toFixed(0)} dB</p>
      <p>Average Decibel: {averageDecibel.toFixed(0)} dB</p>
      <p>Max Decibel: {maxDecibel.toFixed(0)} dB</p>
      <DateWrapper>
        {fixedTime ? `Fixed Time: ${fixedTime}` : `Current Time: ${currentTime}`}
      </DateWrapper>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DecibelMeter;