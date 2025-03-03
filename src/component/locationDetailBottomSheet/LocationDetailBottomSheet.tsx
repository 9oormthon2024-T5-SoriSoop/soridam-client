import React, { useState } from 'react';
import { BackBtn, Background, BottomSheet, CurrentDateTimeContainer, CurrentDateWrapper, CurrentTimeWrapper, Header, Location, LocationInfoContainer, LocationInfoWrapper, LocationNoieInfoWrapper, MenuTitle, NoiseInfo, NoiseInfoImg, Review, ReviewContainer, ReviewList, ReviewTitle } from './LocationDetailBottomSheet.styles';
import MarkerGreen from '../../assets/icons/ico_marker_quiet_default@2x.png';
import useFormattedDateTime from '../../hook/useFormattedDateTime';
import BackIcon from '../../assets/icons/ico_navigate_back.png';
import NoiseChart from '../noiseChart/NoiseChart';

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    // data: NoiseData;
}


// data 비구조화 할당으로 받아야 함
const LocationDetailBottomSheet = ({ isOpen, onClose }: BottomSheetProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const { formattedDate, formattedTime } = useFormattedDateTime(new Date());

    // 예제 소음 데이터 (서버에서 받아와야 함)
    const noiseLevels = [45, 50, 64]; // 5-11시, 11-18시, 18-22시 dB 값

    const sheetVariants = {
        collapsed: { height: 414 },
        expanded: { height: 712 },
    };
  
    return (
        <Background isOpen={isOpen} onClick={onClose}>
            <BottomSheet
                initial="collapsed"
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={sheetVariants}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={(_, info) => {
                    if (info.offset.y < -50) setIsExpanded(true);
                    else setIsExpanded(false);
                }}
            >
                {isExpanded && (
                    <Header>
                        <BackBtn onClick={onClose}>
                            <img src={BackIcon} alt='이전 버튼' />
                        </BackBtn>
                        <MenuTitle>
                            장소 상세보기
                        </MenuTitle>
                    </Header>
                )}
                <LocationInfoContainer>
                    <LocationInfoWrapper>
                        <Location>
                            합정 엔트러사이트
                        </Location>
                        <LocationNoieInfoWrapper>
                            <NoiseInfoImg>
                                <img src={MarkerGreen} alt='마커 이미지' />
                            </NoiseInfoImg>
                            <NoiseInfo>조용함</NoiseInfo>
                        </LocationNoieInfoWrapper>
                    </LocationInfoWrapper>
                    <CurrentDateTimeContainer>
                        <CurrentDateWrapper>
                            {formattedDate}
                        </CurrentDateWrapper>
                        <CurrentTimeWrapper>
                            {formattedTime}
                        </CurrentTimeWrapper>
                    </CurrentDateTimeContainer>
                </LocationInfoContainer>
                <NoiseChart noiseData={noiseLevels} />
                <ReviewContainer>
                    <ReviewTitle>한줄평</ReviewTitle>
                    <ReviewList>
                        <Review>
                            공간이 넓어요. 보통 금요일 저녁에 사람이 많아서 북적북적한 편이에요.
                        </Review>
                        <Review>
                            공간이 넓어요. 보통 금요일 저녁에 사람이 많아서 북적북적한 편이에요.
                        </Review>
                        <Review>
                            공간이 넓어요. 보통 금요일 저녁에 사람이 많아서 북적북적한 편이에요.
                        </Review>
                        <Review>
                            공간이 넓어요. 보통 금요일 저녁에 사람이 많아서 북적북적한 편이에요.
                        </Review>
                        <Review>
                            공간이 넓어요. 보통 금요일 저녁에 사람이 많아서 북적북적한 편이에요.
                        </Review>
                        <Review>
                            공간이 넓어요. 보통 금요일 저녁에 사람이 많아서 북적북적한 편이에요.
                        </Review>
                        <Review>
                            공간이 넓어요. 보통 금요일 저녁에 사람이 많아서 북적북적한 편이에요.
                        </Review>
                    </ReviewList>
                </ReviewContainer>
            </BottomSheet>
      </Background>
    );
  };

export default LocationDetailBottomSheet;