import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
`

export const InfoContainer = styled.div`
    width: 18.6875rem;
    height: 9.5rem;
    position: absolute;
    top: 20.125rem;
    left: 2.375rem;
    border-radius: 0.960625rem;
    background-color: #fff;
    box-shadow: 0px 7.69px 82.21px 0px #2548992B;
    padding: 1.5rem 1.6875rem 0.5rem 1.6875rem;
`

export const DescriptionWrapper = styled.div`
    width: 15.3125rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
    }
`

export const BtnWrapper = styled.div`
    width: 15.3125rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.436875rem;
    padding: 1rem;
`

export const BackBtn = styled.button`
    width: 6.875rem;
    height: 2.5rem;
    padding: 0.3275rem 0.873125rem 0.3275rem 0.873125rem;
    border-radius: 0.436875rem;
    border: none;
    cursor: pointer;
    background-color: #808080;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
`

export const WriteBtn = styled.button`
    width: 6.875rem;
    height: 2.5rem;
    padding: 0.3275rem 0.873125rem 0.3275rem 0.873125rem;
    border-radius: 0.436875rem;
    border: none;
    cursor: pointer;
    background-color: #007BFF;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
`