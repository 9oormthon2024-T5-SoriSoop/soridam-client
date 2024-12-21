import styled from 'styled-components';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
`

export const InfoContainer = styled.div`
    width: 276px;
    height: 313px;
    position: absolute;
    top: 249.5px;
    left: 50px;
    border-radius: 15.37px;
    background-color: #fff;
    box-shadow: 0px 7.69px 82.21px 0px #2548992B;
    padding: 16px 15.5px;
`

export const RowContainer = styled.div`
    width: 100%;
    margin-bottom: 27px;
    &:last-of-type {
        margin-bottom: 16px;
    }   
`

export const RowWrapper = styled.div`
    width:244px;
    height: 35px;
    padding: 4px;
    gap: 5px;
    background-color:  #E8F0FF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PopUpBtn = styled.button`
    width: 244px;
    height: 40px;
    border: none;
    border-radius: 6.99px;
    padding: 5.24px 13.97px 5.24px 13.97px;
    gap: 8.73px;
    background-color: #007BFF;
    color: #fff;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`

export const DecibelLv = styled.p`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 600;
    line-height: 27px;
    text-align: left;
`

export const Description = styled.p`
    margin-top: 5px;
    font-family: "Pretendard";
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: -0.34px;
    text-align: left;
    color: #0000008A;
`