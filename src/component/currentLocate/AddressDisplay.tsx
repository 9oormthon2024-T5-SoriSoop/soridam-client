import React from 'react';
import LocateIco from '../../assets/icons/ico_locate@2x.png'
import { LocateIcoWrapper, LocateWrapper } from './AddressDisplay.styles';

interface AddressDisplayProps {
  address: string | null;
  locationError: string | null;
  addressError: string | null;
}

const AddressDisplay: React.FC<AddressDisplayProps> = ({ address, locationError, addressError }) => {
  if (locationError) {
    return <LocateWrapper>현재 위치를 가져올 수 없습니다: {locationError}</LocateWrapper>;
  }

  if (addressError) {
    return <LocateWrapper>주소 변환 오류: {addressError}</LocateWrapper>;
  }

  if (address) {
    return (
      <LocateWrapper>
        <LocateIcoWrapper>
          <img src={LocateIco} alt='위치_아이콘'/>
        </LocateIcoWrapper> 
        <p>{address}</p>
      </LocateWrapper>
    );
  }

  return <LocateWrapper>위치를 불러오는 중...</LocateWrapper>;
};

export default AddressDisplay;