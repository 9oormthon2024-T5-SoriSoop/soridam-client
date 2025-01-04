import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetState } from '../store/dateTime/dateTimeSlice';

const useResetStateOnPath = (path: string) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === path) {
      dispatch(resetState());
    }
  }, [location.pathname, path, dispatch]);
};

export default useResetStateOnPath;