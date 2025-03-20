import styled from "styled-components";

export const Header = styled.div`
    width: 23.4375rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3.25rem 0 0.6875rem 0;
`

export const BackBtnWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
    }
`

export const DeleteBtn = styled.button`
    width: 1.75rem;
    height: 1.0625rem;
    margin-right: 0.5rem;
    border: none;
    background-color: transparent;
    color: #D32F2F;
    font-size: 1rem;
    line-height: 1.05rem;
`