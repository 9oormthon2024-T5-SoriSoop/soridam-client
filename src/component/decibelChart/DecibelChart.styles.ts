import styled from "styled-components";

export const ChartWrapper = styled.div`
    width: 340px;
    height: 444px;
    border: 2px solid #D7D7D7;
    border-radius: 16px;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    padding: 12px 16px 13px 16px;
    margin: 0 12px 13px;
`

export const DateAndPositionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #6d6d6d;
`

export const PositionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DateWrapper = styled.div`
    width: 123px;
    height: 53px;
    display: flex;
    align-items: center;
`

export const MarkerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


export const DecibelContainer = styled.div`
    width: 100%;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #6d6d6d;
    margin-bottom: 28px;
`

export const AverageDecibelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    p {
        text-align: center;
    }
`

export const CurrentDecibelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p {
        text-align: center;
        font-weight: 600;
    };
    p:first-child {
        font-size: 20px;
        line-height: 20px;
        color: #007BFF;
    };
    p:last-child {
        font-size: 16px;
        line-height: 24px;
        color: #007BFF
    }
`

export const MaxDecibelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    p {
        text-align: center;
    }
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
    padding: 26px 30px 13px 30px;
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