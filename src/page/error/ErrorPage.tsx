import React from 'react';
import Error from '../../assets/icons/ico_error.png';
import { ErrorImgWrapper, ErrorInfo, ErrorPageBG, ErrorPageBtn } from './ErrorPage.styles';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <ErrorPageBG>
            <ErrorImgWrapper>
                <img src={Error} alt='error image' />
            </ErrorImgWrapper>
            <ErrorInfo>
                불편을 드려 죄송합니다.<br/> 
                요청하신 페이지를 찾을 수 없어요.
            </ErrorInfo>
            <Link to='/measure'>
                <ErrorPageBtn>
                    측정 페이지로 돌아가기
                </ErrorPageBtn>
            </Link>
        </ErrorPageBG>
    );
};

export default ErrorPage;