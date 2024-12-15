import styled from "styled-components";

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 10px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AddressWrapper = styled.div`
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
`

export const DateWrapper = styled.div`
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #727272;
`

export const MarkerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DecibelContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    p {
      font-size: 16px;
      font-weight: 400;
      color: #060606;
      line-height: 16.8px;
      margin-bottom: 20px;
    }
`

export const DecibelWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const AveragedBWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    height: 28px;
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    padding: 10px 0 10px 5px;
    margin-right: 10px;
`

export const MaxdBWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    height: 28px;
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    padding: 10px 0 10px 5px;
    margin-right: 10px;
`

export const ReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px 10px 12px;
    p {
        font-family: 'Pretendard';
        font-weight: 400;
        font-size: 16px;
        line-height: 16.8px;
        margin-bottom: 14px;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        textarea {
            width: 343px;
            height: 103px;
        }
    }
`

export const RegisterBtn = styled.button`
    width: 342px;
    height: 50px;
    background-color: #0062FF;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    border-radius: 58px;
    color: #FFFFFF;
    border: none;
    margin: 1px 0 15px;
`