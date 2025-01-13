import { useMemo } from 'react';

const useFormattedDateTime = (date: Date) => {
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

  const formattedDate = useMemo(() => formatDate(date), [date]);
  const formattedTime = useMemo(() => formatTime(date), [date]);

  return { formattedDate, formattedTime };
};

export default useFormattedDateTime;