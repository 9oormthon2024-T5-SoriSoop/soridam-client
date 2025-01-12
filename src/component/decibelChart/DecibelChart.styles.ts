import styled from "styled-components";

export const DecibelContainer = styled.div`
    width: 19.25rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #6d6d6d;
    margin-bottom: 1.75rem;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
    letter-spacing: -0.02125rem;
`

export const AverageDecibelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const CurrentDecibelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        text-align: center;
        font-weight: 600;
        color: #007BFF;
    };
    p:first-child {
        font-size: 1.25rem;
        line-height: 1.25rem;
    };
    p:last-child {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`

export const MaxDecibelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

export const ChartBtn = styled.button`
    width: 340px;
    height: 50px;
    background-color: #007BFF;
    color: #ffffff;
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    border: none;
    border-radius: 58px;
    margin: 18px 18px 66px 17px;
    cursor: pointer;
`

export const SaveBtn = styled.button`
    width: 340px;
    height: 50px;
    background-color: #007BFF;
    color: #ffffff;
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    border: none;
    border-radius: 58px;
    margin: 18px 18px 9px 17px;
    cursor: pointer;
`

export const CancelBtn = styled.button`
    width: 340px;
    height: 50px;
    background-color: transparent;
    color: #808080;
    font-family: 'Pretendard';
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    border: none;
    border-radius: 58px;
    margin: 9px 18px 21px 17px;
    cursor: pointer;
`

export const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InfoWrapper = styled.div`
    width: 100%;
    height: 60px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    padding: 26px 26px 13px 26px;
    color: #6D6D6D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
       width : 100%;
       text-align: center;
    }
`