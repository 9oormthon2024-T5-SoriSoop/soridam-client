import React from "react";
import styled from "styled-components";

// 상대 경로로 아이콘 import
import GreenIcon from "../../assets/icons/ico_marker_green.png";
import BlueIcon from "../../assets/icons/ico_marker_blue.png";
import RedIcon from "../../assets/icons/ico_marker_red.png";

const MeasureInfoPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <PopupContainer>
      <PopupRow themeColor="#e3fceb">
        <RowWrapper>
          <Icon src={GreenIcon} alt="Green Marker" />
          <Level>0~70dB</Level>
        </RowWrapper>
        <Description>전화벨 수준으로, 일상 생활에 영향이 없습니다.</Description>
      </PopupRow>
      <PopupRow themeColor="#e3f0fe">
        <RowWrapper>
          <Icon src={BlueIcon} alt="Blue Marker" />
          <Level>70~100dB</Level>
        </RowWrapper>
        <Description>자동차 경적 수준. 잠시라도 노출 시 주의가 필요합니다.</Description>
      </PopupRow>
      <PopupRow themeColor="#fde3e3">
        <RowWrapper>
          <Icon src={RedIcon} alt="Red Marker" />
          <Level>100~120dB</Level>
        </RowWrapper>
        <Description>항공기 이륙 수준. 짧은 시간 노출도 위험합니다.</Description>
      </PopupRow>
      <PopupButton onClick={onClose}>확인했어요</PopupButton>
    </PopupContainer>
  );
};

export default MeasureInfoPopup;

// Styled Components
const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const PopupRow = styled.div<{ themeColor: string }>`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 30px;
  }
`;

const RowWrapper = styled.div<{ themeColor?: string }>`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  background-color: ${({ themeColor }) => themeColor || "#E8F0FF"};
  padding: 10px;
  border-radius: 8px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Level = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

const Description = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 8px;
  text-align: center; /* 설명 텍스트도 가운데 정렬 */
`;

const PopupButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;