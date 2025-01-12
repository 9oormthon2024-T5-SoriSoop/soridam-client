import React from 'react';
import { CancelBtn, CancelBtn2, SaveBtn, StartBtn } from './MeasureBtn.styles';

interface MeasureBtnProps {
  isRecording: boolean;
  isCompleted: boolean;
  onStart: () => void;
  onCancel: () => void;
  onRegister: () => void;
}

const MeasureBtn: React.FC<MeasureBtnProps> = ({ isRecording, isCompleted, onStart, onCancel, onRegister }) => {
  return (
    <div>
      {!isRecording && !isCompleted && <StartBtn onClick={onStart}>측정 시작</StartBtn>}
      {isRecording && !isCompleted && <CancelBtn onClick={onCancel}>측정 취소</CancelBtn>}
      {isCompleted && (
        <>
          <SaveBtn onClick={onRegister}>측정 저장</SaveBtn>
          <CancelBtn2 onClick={onCancel}>측정 취소</CancelBtn2>
        </>
      )}
    </div>
  );
};

export default MeasureBtn;