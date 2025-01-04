import React from 'react';

interface AddressDisplayProps {
  address: string | null;
  locationError: string | null;
  addressError: string | null;
}

const AddressDisplay: React.FC<AddressDisplayProps> = ({ address, locationError, addressError }) => {
  if (locationError) {
    return <div>현재 위치를 가져올 수 없습니다: {locationError}</div>;
  }

  if (addressError) {
    return <div>주소 변환 오류: {addressError}</div>;
  }

  if (address) {
    return <div>현재 위치: {address}</div>;
  }

  return <div>위치를 불러오는 중...</div>;
};

export default AddressDisplay;