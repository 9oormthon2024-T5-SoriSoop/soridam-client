import React, { useEffect, useState } from 'react';

interface TimerProps {
  initialCountdown: number; // 초기 카운트다운 시간
  isActive: boolean; // 타이머 활성화 여부
  onComplete: () => void; // 카운트다운 완료 후 호출되는 콜백
  onReset?: () => void; // 리셋 시 호출되는 콜백
}

const Timer: React.FC<TimerProps> = ({ initialCountdown, isActive, onComplete, onReset }) => {
  const [countdown, setCountdown] = useState<number>(initialCountdown);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isActive) {
      if (countdown > 0) {
        timerId = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      } else {
        timerId = setTimeout(() => setElapsedTime((prev) => prev + 1), 1000);
      }
    } else {
      // 타이머가 비활성화되면 초기화
      setCountdown(initialCountdown);
      setElapsedTime(0);
      if (onReset) onReset();
    }

    return () => clearTimeout(timerId);
  }, [isActive, countdown, elapsedTime, initialCountdown, onReset]);

  useEffect(() => {
    if (countdown === 0) {
      onComplete();
    }
  }, [countdown, onComplete]);

  // 타이머 형식 포맷
  const formatTime = (time: number) =>
    `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`;

  const formatElapsedTime = (time: number) =>
    `+${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`;

  return (
    <div>
      {countdown > 0 ? (
        <p>{formatTime(countdown)}</p>
      ) : (
        <p>{formatElapsedTime(elapsedTime)}</p>
      )}
    </div>
  );
};

export default Timer;