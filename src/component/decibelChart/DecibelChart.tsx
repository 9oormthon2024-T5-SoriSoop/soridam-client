import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { AverageDecibelWrapper, CurrentDecibelWrapper, DecibelContainer, MaxDecibelWrapper } from './DecibelChart.styles';
import { DecibelDataPoint } from '../../types/DecibelDataPoint';
import { useAppSelector } from '../../hook/redux';
import { RootState } from '../../store';

Chart.register(...registerables);

interface DecibelMeterProps {
    decibel: number,
    dataPoints: DecibelDataPoint[],
    averageDecibel: number,
    maxDecibel: number
}

const DecibelChart: React.FC<DecibelMeterProps> = ({
  decibel, dataPoints, averageDecibel, maxDecibel
}) => {

    const { isRecording } = useAppSelector((state: RootState) => state.dateTime);

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
            },
            datalabels: {
                display: false,  // 데이터 레이블 표시 안함
            },
        }
    };

    

  return (
    <>
      <DecibelContainer>
          <AverageDecibelWrapper>
              <p>평균</p>
              <p>{averageDecibel.toFixed(0)}</p>
          </AverageDecibelWrapper>
          <CurrentDecibelWrapper>
              <p>
              { isRecording && averageDecibel < 70 ? "조용함" 
              : isRecording && averageDecibel < 100 ? "보통" 
                  : isRecording && averageDecibel < 120 ? "시끄러움" 
                      : "측정 전" }  
              </p>
              <p>현재 {decibel.toFixed(0)}dB</p>
          </CurrentDecibelWrapper>
          <MaxDecibelWrapper>
              <p>최대</p>
              <p>{maxDecibel.toFixed(0)}</p>
          </MaxDecibelWrapper>
      </DecibelContainer>
      <Line data={chartData} options={options} style={{ width: '19.75rem', height: '10.75rem', marginBottom: '1.625rem' }}  />
    </>
  );
};

export default DecibelChart;