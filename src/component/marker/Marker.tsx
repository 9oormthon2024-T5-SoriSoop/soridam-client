import React from 'react';
import MarkerDefault from '../../assets/icons/ico_marker_default.png';
import MarkerGreen from '../../assets/icons/ico_marker_green.png';
import MarkerBlue from '../../assets/icons/ico_marker_blue.png';
import MarkerRed from '../../assets/icons/ico_marker_red.png';
import { MarkerWrapper } from './Marker.style';

interface MarkerProps {
  averageDecibel: number; // 평균 데시벨
  isRecording: boolean;   // 측정 중인지 여부
}

const Marker: React.FC<MarkerProps> = ({ averageDecibel, isRecording }) => {
  let markerSrc = MarkerDefault; // 기본 마커
  
  if (isRecording) {
    if (averageDecibel < 70) {
      markerSrc = MarkerGreen;
    } else if (averageDecibel < 100) {
      markerSrc = MarkerBlue;
    } else if (averageDecibel <= 120) {
      markerSrc = MarkerRed;
    }
  }

  return (
        <MarkerWrapper>
            <img src={markerSrc} alt="marker" />
        </MarkerWrapper>
    );
};

export default Marker;