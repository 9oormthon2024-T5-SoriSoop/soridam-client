import React from 'react';
import { DateTimeContainer, DateWrapper, TimeWrapper } from './DateTimeDisplay.styles';

interface DateTimeDisplayProps {
  date: Date; // 표시할 날짜와 시간
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ date }) => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <DateTimeContainer>
      <DateWrapper>{formatDate(date)}</DateWrapper>
      <TimeWrapper>{formatTime(date)}</TimeWrapper>
    </DateTimeContainer>
  );
};

export default DateTimeDisplay;