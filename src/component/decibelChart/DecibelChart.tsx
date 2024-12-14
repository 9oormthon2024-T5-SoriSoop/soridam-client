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
    const [averageDecibel, setAverageDecibel] = useState<number>(0); // 평균 데시벨 상태 추가
    const [currentTime, setCurrentTime] = useState<string>("");
    const [fixedTime, setFixedTime] = useState<string | null>(null);
    
      // 현재 시간을 업데이트
      useEffect(() => {
        if (fixedTime) return; // 시간이 고정된 경우 업데이트 멈춤
    
        const updateTime = () => {
          const now = new Date();
          const formattedTime = formatDateTime(now);
          setCurrentTime(formattedTime);
        };
    
        updateTime(); // 초기 시간 설정
        const interval = setInterval(updateTime, 1000); // 1초마다 업데이트
    
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
      }, [fixedTime]);
    
      // 버튼 클릭 시 고정 시간 설정
      const handleButtonClick = () => {
        if (!fixedTime) {
          setFixedTime(currentTime);
        }
      };
    
      // 시간 포맷 함수
      const formatDateTime = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}.${month}.${day} ${hours}:${minutes}`;
      };    

    const handleToggleRecording = () => {
        if (isRecording) {
            stopMeasuringDecibel();
            handleButtonClick();
        } else {
            startMeasuringDecibel();
            handleButtonClick();
        }
        setIsRecording(!isRecording);
    };

    // Update chart data with timestamp
    React.useEffect(() => {
        if (isRecording) {
            const timestamp = new Date().toISOString(); // Get current time in ISO format
            setDataPoints((prev) => [...prev.slice(-49), { x: timestamp, y: decibel }]); // Keep last 50 data points
        }
    }, [decibel, isRecording]);


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
      <p>Current Decibel: {decibel.toFixed(2)} dB</p>
      <DateWrapper>
        <p>{fixedTime || currentTime}</p>
      </DateWrapper>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DecibelMeter;