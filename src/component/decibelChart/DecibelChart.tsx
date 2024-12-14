import React, { useState } from 'react';
import useRecordWithDecibel from '../../hook/useRecordWithDecibel';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const DecibelMeter = () => {
    const { startMeasuringDecibel, stopMeasuringDecibel, decibel } = useRecordWithDecibel();
  const [isRecording, setIsRecording] = useState(false);
  const [dataPoints, setDataPoints] = useState<{ x: string, y: number }[]>([]); // Change to store time and decibel
  
  const handleToggleRecording = () => {
    if (isRecording) {
      stopMeasuringDecibel();
    } else {
      startMeasuringDecibel();
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
      <Line data={chartData} options={options} />
    </div>
  );
};

export default DecibelMeter;