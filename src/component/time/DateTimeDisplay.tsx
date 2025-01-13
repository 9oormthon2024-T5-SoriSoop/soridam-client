import React from 'react';
import { DateTimeContainer, DateWrapper, TimeWrapper } from './DateTimeDisplay.styles';
import useFormattedDateTime from '../../hook/useFormattedDateTime';

interface DateTimeDisplayProps {
  date: Date; // 표시할 날짜와 시간
}

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ date }) => {
  // 날짜와 시간 포맷을 가져오는 훅 사용
  const { formattedDate, formattedTime } = useFormattedDateTime(date);

  return (
    <DateTimeContainer>
      <DateWrapper>{formattedDate}</DateWrapper>
      <TimeWrapper>{formattedTime}</TimeWrapper>
    </DateTimeContainer>
  );
};

export default DateTimeDisplay;