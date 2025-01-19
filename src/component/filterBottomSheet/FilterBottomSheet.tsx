import React, { useState } from 'react';
import { ApplyBtn, Background, BottomSheetContainer, BtnContainer, BtnWrapper, CafeIconDescription, CafeIconWrapper, CafeOption, CafeOptionContainer, Category, CategoryOptionContainer, CategoryOptionDescription, CategoryTitle, CloseBtn, Container, CultureIconDescription, CultureIconWrapper, CultureOption, CultureOptionContainer, CutleryIconDescription, CutleryIconWrapper, CutleryOption, CutleryOptionContainer, Default, FarRadiusOption, FarRadiusOptionWrapper, LoudIconDescription, LoudIconWrapper, LoudOption, LoudOptionWrapper, NearRadiusOption, NearRadiusOptionWrapper, NoiseLvOption, NoiseLvOptionContainer, NoiseLvOptionDescription, NoiseLvTitle, NormalIconDescription, NormalIconWrapper, NormalOption, NormalOptionWrapper, NormalRadiusOption, NormalRadiusOptionWrapper, QuietIconDescription, QuietIconWrapper, QuietOption, QuietOptionContainer, QuietOptionWrapper, RadiusOptionContainer, RadiusTitle, ResetBtn, TourIconDescription, TourIconWrapper, TourOption, TourOptionContainer } from './FilterBottomSheet.styles';
import CloseIcon from '../../assets/icons/ico_round-close@3x.png';
import CafeIcon from '../../assets/icons/cafe@2x.png';
import CutleryIcon from '../../assets/icons/cutlery@2x.png';
import CultureIcon from '../../assets/icons/culture@2x.png';
import TourIcon from '../../assets/icons/tour@2x.png';
import QuietLvIcon from '../../assets/icons/start@3x.png';
import NormalLvIcon from '../../assets/icons/waypoint@3x.png';
import LoudLvIcon from '../../assets/icons/end@3x.png';

interface BottomSheetProps {
    onClose: () => void;
}

const FilterBottomSheet: React.FC<BottomSheetProps> = ({ onClose }) => {
    // 카테고리, 소음 수준, 반경에 대해 각각 선택할 수 있도록 배열로 관리
    const [selectedOptions, setSelectedOptions] = useState({
        category: null, // 기본값 'quiet'
        noiseLevel: 'quiet', // 기본값 'quiet'
        radius: null // 기본값 'medium'
    });

    const handleOptionSelect = (type: string, option: string) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [type]: option
        }));
    };

    const getStyles = (type: string, option: string) => {
        const selectedValue = selectedOptions[type];
        return selectedValue === option
            ? {
                  borderColor: "#007BFF",
                  bgColor: "#F5F5F5",
                  textColor: "#0062FF"
              }
            : {
                  borderColor: "#808080",
                  bgColor: "#FFFFFF",
                  textColor: "#727272"
              };
    };


    return (
        <Background>
            <BottomSheetContainer>
                <Container>
                    <Category>
                        <CategoryTitle>카테고리를 골라주세요.</CategoryTitle>
                        <CategoryOptionDescription>중복선택 가능</CategoryOptionDescription>
                        <CloseBtn onClick={onClose}>
                            <img src={CloseIcon} alt='close_button' />
                        </CloseBtn>
                    </Category>
                    <CategoryOptionContainer>
                        <CafeOptionContainer
                            style={{
                                borderColor: getStyles("category", "cafe").borderColor,
                                backgroundColor: getStyles("category", "cafe").bgColor,
                            }}
                            onClick={() => handleOptionSelect("category", "cafe")}
                        >
                            <CafeOption>
                                <CafeIconWrapper>
                                    <img src={CafeIcon} alt='cafe' />
                                </CafeIconWrapper>
                                <CafeIconDescription>카페</CafeIconDescription>
                            </CafeOption>
                        </CafeOptionContainer>
                        <CutleryOptionContainer>
                            <CutleryOption>
                                <CutleryIconWrapper>
                                    <img src={CutleryIcon} alt='cutlery' />
                                </CutleryIconWrapper>
                                <CutleryIconDescription>음식점</CutleryIconDescription>
                            </CutleryOption>
                        </CutleryOptionContainer>
                        <CultureOptionContainer>
                            <CultureOption>
                                <CultureIconWrapper>
                                    <img src={CultureIcon} alt='culture' />
                                </CultureIconWrapper>
                                <CultureIconDescription>문화시설</CultureIconDescription>
                            </CultureOption>
                        </CultureOptionContainer>
                        <TourOptionContainer>
                            <TourOption>
                                <TourIconWrapper>
                                    <img src={TourIcon} alt='tour' />
                                </TourIconWrapper>
                                <TourIconDescription>관광명소</TourIconDescription>
                            </TourOption>
                        </TourOptionContainer>
                    </CategoryOptionContainer>
                    <NoiseLvOption>
                        <NoiseLvTitle>소음 수준</NoiseLvTitle>
                        <NoiseLvOptionDescription>중복선택 가능</NoiseLvOptionDescription>
                    </NoiseLvOption>
                    <NoiseLvOptionContainer>
                        <QuietOptionContainer>
                            <QuietOptionWrapper>
                                <QuietOption>
                                    <QuietIconWrapper>
                                        <img src={QuietLvIcon} alt='Quiet Level' />
                                    </QuietIconWrapper>
                                    <QuietIconDescription>0~70dB (조용함)</QuietIconDescription>
                                </QuietOption>
                            </QuietOptionWrapper>
                            <Default>기본값</Default>
                        </QuietOptionContainer>
                        <NormalOptionWrapper>
                            <NormalOption>
                                <NormalIconWrapper>
                                    <img src={NormalLvIcon} alt='Normal Level' />
                                </NormalIconWrapper>
                                <NormalIconDescription>70~100dB (보통)</NormalIconDescription>
                            </NormalOption>
                        </NormalOptionWrapper>
                        <LoudOptionWrapper>
                            <LoudOption>
                                <LoudIconWrapper>
                                    <img src={LoudLvIcon} alt='Normal Level' />
                                </LoudIconWrapper>
                                <LoudIconDescription>100~120dB (시끄러움)</LoudIconDescription>
                            </LoudOption>
                        </LoudOptionWrapper>
                    </NoiseLvOptionContainer>
                    <RadiusTitle>반경</RadiusTitle>
                    <RadiusOptionContainer>
                        <NearRadiusOptionWrapper>
                            <NearRadiusOption>
                                500m 이하
                            </NearRadiusOption>
                        </NearRadiusOptionWrapper>
                        <NormalRadiusOptionWrapper>
                            <NormalRadiusOption>
                                1km 이하
                            </NormalRadiusOption>
                        </NormalRadiusOptionWrapper>
                        <FarRadiusOptionWrapper>
                            <FarRadiusOption>
                                2km 이하    
                            </FarRadiusOption>
                        </FarRadiusOptionWrapper>
                    </RadiusOptionContainer>
                </Container>
                <BtnContainer>
                    <BtnWrapper>
                        <ResetBtn>초기화</ResetBtn>
                        <ApplyBtn>적용</ApplyBtn>
                    </BtnWrapper>
                </BtnContainer>
            </BottomSheetContainer>
        </Background>
    );
};

export default FilterBottomSheet;