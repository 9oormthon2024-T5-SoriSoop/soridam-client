import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";

// ChartJS에 필요한 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend, ChartDataLabels);

interface NoiseChartProps {
  noiseData: number[]; // 3개의 소음 데이터 (dB 단위)
}

const NoiseChart: React.FC<NoiseChartProps> = ({ noiseData }) => {
  const labels = ["5-11시", "11-18시", "18-22시"];

  // ✅ 현재 시간 가져오기
  const now = new Date();
  const currentHour = now.getHours();

  // ✅ 현재 시간에 맞는 인덱스 찾기
  const getCurrentIndex = () => {
    if (currentHour >= 5 && currentHour < 11) return 0;
    if (currentHour >= 11 && currentHour < 18) return 1;
    if (currentHour >= 18 && currentHour <= 22) return 2;
    return -1; // 해당하는 시간대 없음 (예: 23시~4시)
  };

  const currentIndex = getCurrentIndex();

  // ✅ backgroundColor 동적으로 설정
  const backgroundColors = labels.map((_, index) =>
    index === currentIndex ? "#5CC362" : "#A0A0A0"
  );

  const data = {
    labels,
    datasets: [
      {
        label: "소음 레벨 (dB)",
        data: noiseData,
        backgroundColor: backgroundColors, // 동적으로 색상 설정
        borderRadius: 10.62,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        color: "black", // 데이터 레이블 텍스트 색상
        font: { size: 14.87 },
        anchor: "end",
        align: "top",  // 'top' 값은 적합한 타입입니다.
        formatter: (value: number, context: Context) => {
          const index = context.dataIndex;
          if (index === currentIndex) {
            return `${value} dB\n(${noiseData.length}개)`; // 현재 시간대에는 데이터 개수 추가
          }
          return `${value} dB`; // 다른 시간대는 dB만 표시
        },
      },
    },
    scales: {
      y: { beginAtZero: true, suggestedMax: 100 },
    },
  };

  return (
    <div style={{ width: "21.4375rem", height: "6.875rem" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default NoiseChart;