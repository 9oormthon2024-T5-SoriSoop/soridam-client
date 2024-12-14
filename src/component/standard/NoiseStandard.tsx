import React from "react";
import styled from "styled-components";

const MeasureInfoPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <PopupContainer>
      <PopupRow>
        <Icon color="green" />
        <TextWrapper>
          <Level>0~70dB</Level>
          <Description>전화벨 수준으로, 일상 생활에 영향이 없습니다.</Description>
        </TextWrapper>
      </PopupRow>
      <PopupRow>
        <Icon color="blue" />
        <TextWrapper>
          <Level>70~100dB</Level>
          <Description>자동차 경적 수준. 잠시라도 노출 시 주의가 필요합니다.</Description>
        </TextWrapper>
      </PopupRow>
      <PopupRow>
        <Icon color="red" />
        <TextWrapper>
          <Level>100~120dB</Level>
          <Description>항공기 이륙 수준. 짧은 시간 노출도 위험합니다.</Description>
        </TextWrapper>
      </PopupRow>
      <PopupButton onClick={onClose}>확인했어요</PopupButton>
    </PopupContainer>
  );
};

export default MeasureInfoPopup;

// Styled Components (PopupContainer 등은 기존 코드와 동일)
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

const PopupRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 20px;
  }
`;

const Icon = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Level = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

const Description = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 4px;
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