import React, { useState } from 'react';
import MarkerGreen from '../../assets/icons/ico_marker_green.png';
import MarkerBlue from '../../assets/icons/ico_marker_blue.png';
import MarkerRed from '../../assets/icons/ico_marker_red.png';
import BackIcon from '../../assets/icons/ico_navigate_back.png';
import { useAppSelector } from '../../hook/redux';
import { useDispatch } from 'react-redux';
import { BackBtnWrapper, CommentInput, CommentTitle, DateTimeContainer, DecibelWrapper, InfoContainer, LimitInfo, LocationWrapper, LoctionInfoWrapper, NoiseImgWrapper, NoiseInfo, NoiseLevelWrapper, NoiseResultTitle, NoiseResultWrapper, StyledToastContainer, SubmitBtn } from './NoiseRegister.styles';
import { RootState } from '../../store';
import { toggleBackModal } from '../../store/menu/menuSlice';
import BackModal from '../../component/backModal/BackModal';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useCoordinateToAddress from '../../hook/useCoordinateToAddress';
import useFormattedDateTime from '../../hook/useFormattedDateTime';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const NoiseRegister = () => {
  const [value, setValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const isBackModalOpen = useAppSelector((state: RootState) => state.menu.backModalOpen); // Redux 상태 가져오기
  const { maxDecibel, averageDecibel, latitude, longitude } = useAppSelector((state: RootState) => state.noise);
  // useCoordinateToAddress 훅을 사용하여 주소 얻기
  const { address, error } = useCoordinateToAddress({ latitude, longitude });
  const { fixedDate } = useAppSelector((state: RootState) => state.dateTime);
  // 날짜와 시간 포맷을 가져오는 훅 사용
  const { formattedDate, formattedTime } = useFormattedDateTime(fixedDate);
  const API_BASE_URL = "https://63c2-59-18-161-28.ngrok-free.app/api";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 뒤로가기 모달 열기
  const handleBackClick = () => {
    dispatch(toggleBackModal(true)); // Redux로 모달 열기
  };

  // 마커와 텍스트를 소음 수준에 따라 결정
  let markerSrc = '';
  let markerText = '';
  
  if (averageDecibel <= 70) {
    markerSrc = MarkerGreen;  // 조용함
    markerText = '조용함';
  } else if (averageDecibel > 70 && averageDecibel <= 100) {
    markerSrc = MarkerBlue;  // 보통
    markerText = '보통';
  } else {
    markerSrc = MarkerRed;  // 시끄러움
    markerText = '시끄러움';
  }

  const isValueEmpty = value.trim() === '';
  const borderColor = isValueEmpty && isTouched ? '#FF3131' : isTouched ? '#007BFF' : '#808080';
  const limitInfoColor = isValueEmpty && isTouched ? '#FF3131' : '#808080';
  const submitBtnColor = isValueEmpty ? '#808080' : '#007BFF';
  const isSubmitDisabled = isValueEmpty;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (isSubmitDisabled) return;

    const data = {
      x: latitude,
      y: longitude,
      avgDecibel: averageDecibel.toFixed(2),
      maxDecibel: maxDecibel.toFixed(2),
      review: value,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/noises`, data);
      console.log('Response:', response.data);

      // Toast 성공 메시지 표시
      toast.success(
        '등록 완료! 측정 데이터와 한줄평이 저장되었습니다. [저장 탭]에서 확인하세요.',
        { position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeButton: true,
        }
      );

      // 경로 이동
      navigate('/measure');
    } catch (error) {
      console.error('Error:', error);

      // Toast 실패 메시지 표시
      toast.error('등록 실패. 네트워크 연결을 확인해주세요.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeButton: true,
      });
    }
  };

  return (
    <div>
        <BackBtnWrapper>
            <img src={BackIcon} alt='backIcon' onClick={handleBackClick}/>
        </BackBtnWrapper>
        <InfoContainer>
          <Map
              id="map"
              center={{
                  lat: latitude,
                  lng: longitude,
              }}
              style={{
                  width: '21.4375rem',
                  height: '10rem',
                  marginBottom: '0.875rem',
              }}
              level={3} // Zoom level
          >
              <MapMarker
                  position={{
                    lat: latitude,
                    lng: longitude,
                  }}
                  image={{
                    src: markerSrc, // 마커이미지의 주소입니다
                    size: {
                      width: 48,
                      height: 48,
                    }, // 마커이미지의 크기입니다
                  }}
              />
          </Map>
          <LoctionInfoWrapper>
            {address ? (
              <LocationWrapper>{address}</LocationWrapper>
            ) : error ? (
              <LocationWrapper>{error}</LocationWrapper>
            ) : (
              <LocationWrapper>주소를 불러오는 중...</LocationWrapper>
            )}
            <NoiseLevelWrapper>
              <NoiseImgWrapper><img src={markerSrc} alt='marker' /></NoiseImgWrapper>
              <NoiseInfo>{markerText}</NoiseInfo>
            </NoiseLevelWrapper>
          </LoctionInfoWrapper>
          <DateTimeContainer>
              <p>{formattedDate}</p>
              <p>{formattedTime}</p>
          </DateTimeContainer>
          <NoiseResultTitle>소음 측정 결과</NoiseResultTitle>
          <NoiseResultWrapper>
            <DecibelWrapper>
              <p>평균</p>
              <p>{averageDecibel.toFixed(2)}</p>
            </DecibelWrapper>
            <DecibelWrapper>
              <p>최대</p>
              <p>{maxDecibel.toFixed(2)}</p>
            </DecibelWrapper>
          </NoiseResultWrapper>
          <CommentTitle>한줄평</CommentTitle>
          <CommentInput 
            placeholder='소음 상황이나 추가로 적고 싶은 내용을 150자 이내로 간단히 작성해주세요. (예: 공사 소음으로 인해 시끄러움)'
            value={value}
            onChange={handleInputChange}
            onBlur={() => setIsTouched(true)}
            borderColor={borderColor}
          />
          <LimitInfo color={limitInfoColor}>
            한줄평을 입력 후 등록 버튼이 활성화됩니다.
          </LimitInfo>
          <SubmitBtn
            onClick={handleSubmit}
            backgroundColor={submitBtnColor}
            disabled={isSubmitDisabled}
          >
            등록하기
          </SubmitBtn>
        </InfoContainer>
        <StyledToastContainer />
        {isBackModalOpen && <BackModal/> }
    </div>
  );
};

export default NoiseRegister;