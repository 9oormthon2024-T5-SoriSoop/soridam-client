import styled from "styled-components";

export const NoiseMapHeader = styled.div`
    width: 23.4375rem;
    min-height: 3.8125rem;
    margin-top: 2.75rem;
    position: relative;
    display: flex;
    align-items: center;
`

export const FilterBtn = styled.button`
    width: 4.375rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.0625rem solid #808080;
    background-color: #F5F5F5;
    margin: 0.6875rem 1rem 0.625rem 0;
    padding: 0.125rem 0.3125rem 0.125rem 0.3125rem;
    gap: 0.5rem;
    img {
        width: 1.5rem;
        height: 1.5rem;
    }
    p {
        width: 1.75rem;
        height: 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
        letter-spacing: -0.49px;
        color: #000000;
    }
`