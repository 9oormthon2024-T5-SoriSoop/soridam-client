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
    width: 17.25rem;
    height: 19.5625rem;
    position: absolute;
    top: 15.59375rem;
    left: 3.125rem;
    border-radius: 0.960625rem;
    background-color: #fff;
    box-shadow: 0px 7.69px 82.21px 0px #2548992B;
    padding: 1rem 0.96875rem;
`

export const RowContainer = styled.div`
    width: 100%;
    margin-bottom: 1.6875rem;
    &:last-of-type {
        margin-bottom: 1rem;
    }   
`

export const RowWrapper = styled.div`
    width:15.25rem;
    height: 2.1875rem;
    padding: 0.25rem;
    gap: 0.3125rem;
    background-color:  #E8F0FF;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PopUpBtn = styled.button`
    width: 15.25rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.436875rem;
    padding: 0.3275rem 0.873125rem 0.3275rem 0.873125rem;
    gap: 0.545625rem;
    background-color: #007BFF;
    color: #fff;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
`

export const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

export const DecibelLv = styled.p`
    font-family: "Pretendard";
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.6875rem;
    text-align: left;
`

export const Description = styled.p`
    margin-top: 0.3125rem;
    font-family: "Pretendard";
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.05rem;
    letter-spacing: -0.02125rem;
    text-align: left;
    color: #0000008A;
`