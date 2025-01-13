import React from 'react';
import { useAppDispatch } from '../../hook/redux';
import { useNavigate } from 'react-router-dom';
import { toggleBackModal } from '../../store/menu/menuSlice';
import { BackBtn, Background, BtnWrapper, DescriptionWrapper, InfoContainer, WriteBtn } from './BackModal.styles';

const BackModal = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // '뒤로가기' 버튼 클릭 시 실행
    const handleNavigateBack = () => {
        dispatch(toggleBackModal(false)); // Redux로 모달 닫기
        navigate('/measure'); // /measure 경로로 이동
    };

    // '작성하기' 버튼 클릭 시 실행
    const handleKeepEditing = () => {
        dispatch(toggleBackModal(false)); // Redux로 모달 닫기
    };

    return (
        <Background>
            <InfoContainer>
                <DescriptionWrapper>
                    <p>저장을 위해 한줄평을 작성하시겠어요?</p>
                    <p>아니면 나가시겠어요?</p>
                </DescriptionWrapper>
                <BtnWrapper>
                    <BackBtn onClick={handleNavigateBack}>뒤로가기</BackBtn>
                    <WriteBtn onClick={handleKeepEditing}>작성하기</WriteBtn>
                </BtnWrapper>
            </InfoContainer>
        </Background>
    );
};

export default BackModal;