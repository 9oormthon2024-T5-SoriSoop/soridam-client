import styled from "styled-components";

export const ErrorPageBG = styled.div`
    width: 100%;
    height: 100%;
    padding: 15.25rem 1.0625rem 8rem 1.125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ErrorImgWrapper = styled.div`
    width: 13.75rem;
    height: 6.25rem;
    margin-bottom: 3.25rem;
    & img {
        width: 100%;
        height: 100%;
    }
`

export const ErrorInfo = styled.p`
    width: 13.75rem;
    height: 3rem;
    margin-bottom: 11.875rem;
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #060606;
`

export const ErrorPageBtn = styled.button`
    width: 21.25rem;
    height: 3.125rem;
    border: none;
    border-radius: 3.625rem;
    background-color: #007BFF;
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: #FFF;
`