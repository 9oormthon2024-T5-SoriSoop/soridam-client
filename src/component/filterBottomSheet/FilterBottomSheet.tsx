import React from 'react';
import { Background, BottomSheetContainer, CloseBtn, Container, Header, HeaderOptionContainer, Option, OptionDescription, Title1 } from './FilterBottomSheet.styles';
import CloseIcon from '../../assets/icons/ico_round-close@3x.png';

interface BottomSheetProps {
    onClose: () => void;
}

const FilterBottomSheet: React.FC<BottomSheetProps> = ({ onClose }) => {
    return (
        <Background>
            <BottomSheetContainer>
                <Container>
                    <Header>
                        <Title1>카테고리를 골라주세요.</Title1>
                        <OptionDescription>중복선택 가능</OptionDescription>
                        <CloseBtn onClick={onClose}>
                            <img src={CloseIcon} alt='close_button' />
                        </CloseBtn>
                    </Header>
                    <HeaderOptionContainer>
                        <Option>
                            <div>
                                <p>☕️</p>
                                <p>카페</p>
                            </div>
                        </Option>
                    </HeaderOptionContainer>
                </Container>
            </BottomSheetContainer>
        </Background>
    );
};

export default FilterBottomSheet;