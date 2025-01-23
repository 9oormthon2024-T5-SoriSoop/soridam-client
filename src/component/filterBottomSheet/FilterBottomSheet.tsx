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
import { StyledKey, StyleValue } from '../../types/FilterBottomSheetStyleValue';

interface BottomSheetProps {
    onClose: () => void;
}

const FilterBottomSheet: React.FC<BottomSheetProps> = ({ onClose }) => {
    // 카테고리, 소음 수준, 반경에 대해 각각 선택할 수 있도록 배열로 관리
    const [selectedOptions, setSelectedOptions] = useState<StyleValue>({
        category: null, // 기본값 'quiet'
        noiseLevel: 'quiet', // 기본값 'quiet'
        radius: null // 기본값 'medium'
    });

    const handleOptionSelect = (type: StyledKey, option: string) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [type]: option
        }));
    };

    const isSelected = (type: StyledKey, option: string) =>
        selectedOptions[type] === option;


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
                            isSelected={isSelected('category', 'cafe')}
                            onClick={() => handleOptionSelect('category', 'cafe')}
                        >
                            <CafeOption>
                                <CafeIconWrapper>
                                    <img src={CafeIcon} alt='cafe' />
                                </CafeIconWrapper>
                                <CafeIconDescription
                                    isSelected={isSelected('category', 'cafe')}
                                >
                                    카페
                                </CafeIconDescription>
                            </CafeOption>
                        </CafeOptionContainer>
                        <CutleryOptionContainer
                            isSelected={isSelected('category', 'cutlery')}
                            onClick={() => handleOptionSelect('category', 'cutlery')}
                        >
                            <CutleryOption>
                                <CutleryIconWrapper>
                                    <img src={CutleryIcon} alt='cutlery' />
                                </CutleryIconWrapper>
                                <CutleryIconDescription
                                    isSelected={isSelected('category', 'cutlery')}
                                >
                                    음식점
                                </CutleryIconDescription>
                            </CutleryOption>
                        </CutleryOptionContainer>
                        <CultureOptionContainer
                            isSelected={isSelected('category', 'culture')}
                            onClick={() => handleOptionSelect('category', 'culture')}
                        >
                            <CultureOption>
                                <CultureIconWrapper>
                                    <img src={CultureIcon} alt='culture' />
                                </CultureIconWrapper>
                                <CultureIconDescription
                                    isSelected={isSelected('category', 'culture')}
                                >
                                    문화시설
                                </CultureIconDescription>
                            </CultureOption>
                        </CultureOptionContainer>
                        <TourOptionContainer
                            isSelected={isSelected('category', 'tour')}
                            onClick={() => handleOptionSelect('category', 'tour')}
                        >
                            <TourOption>
                                <TourIconWrapper>
                                    <img src={TourIcon} alt='tour' />
                                </TourIconWrapper>
                                <TourIconDescription
                                    isSelected={isSelected('category', 'tour')}
                                >
                                    관광명소
                                </TourIconDescription>
                            </TourOption>
                        </TourOptionContainer>
                    </CategoryOptionContainer>
                    <NoiseLvOption>
                        <NoiseLvTitle>소음 수준</NoiseLvTitle>
                        <NoiseLvOptionDescription>중복선택 가능</NoiseLvOptionDescription>
                    </NoiseLvOption>
                    <NoiseLvOptionContainer>
                        <QuietOptionContainer>
                            <QuietOptionWrapper
                                isSelected={isSelected('noiseLevel', 'quiet')}
                                onClick={() => handleOptionSelect('noiseLevel', 'quiet')}
                            >
                                <QuietOption>
                                    <QuietIconWrapper>
                                        <img src={QuietLvIcon} alt='Quiet Level' />
                                    </QuietIconWrapper>
                                    <QuietIconDescription
                                        isSelected={isSelected('noiseLevel', 'quiet')}
                                    >
                                        0~70dB (조용함)
                                    </QuietIconDescription>
                                </QuietOption>
                            </QuietOptionWrapper>
                            <Default>기본값</Default>
                        </QuietOptionContainer>
                        <NormalOptionWrapper
                            isSelected={isSelected('noiseLevel', 'normal')}
                            onClick={() => handleOptionSelect('noiseLevel', 'normal')}
                        >
                            <NormalOption>
                                <NormalIconWrapper>
                                    <img src={NormalLvIcon} alt='Normal Level' />
                                </NormalIconWrapper>
                                <NormalIconDescription
                                    isSelected={isSelected('noiseLevel', 'normal')}
                                >
                                    70~100dB (보통)
                                </NormalIconDescription>
                            </NormalOption>
                        </NormalOptionWrapper>
                        <LoudOptionWrapper
                            isSelected={isSelected('noiseLevel', 'loud')}
                            onClick={() => handleOptionSelect('noiseLevel', 'loud')}
                        >
                            <LoudOption>
                                <LoudIconWrapper>
                                    <img src={LoudLvIcon} alt='Normal Level' />
                                </LoudIconWrapper>
                                <LoudIconDescription
                                    isSelected={isSelected('noiseLevel', 'loud')}
                                >
                                    100~120dB (시끄러움)
                                </LoudIconDescription>
                            </LoudOption>
                        </LoudOptionWrapper>
                    </NoiseLvOptionContainer>
                    <RadiusTitle>반경</RadiusTitle>
                    <RadiusOptionContainer>
                        <NearRadiusOptionWrapper
                            isSelected={isSelected('radius', '500m')}
                            onClick={() => handleOptionSelect('radius', '500m')}
                        >
                            <NearRadiusOption
                                isSelected={isSelected('radius', '500m')}
                            >
                                500m 이하
                            </NearRadiusOption>
                        </NearRadiusOptionWrapper>
                        <NormalRadiusOptionWrapper
                            isSelected={isSelected('radius', '1km')}
                            onClick={() => handleOptionSelect('radius', '1km')}
                        >
                            <NormalRadiusOption
                                isSelected={isSelected('radius', '1km')}
                            >
                                1km 이하
                            </NormalRadiusOption>
                        </NormalRadiusOptionWrapper>
                        <FarRadiusOptionWrapper
                            isSelected={isSelected('radius', '2km')}
                            onClick={() => handleOptionSelect('radius', '2km')}
                        >
                            <FarRadiusOption
                                isSelected={isSelected('radius', '2km')}
                            >
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