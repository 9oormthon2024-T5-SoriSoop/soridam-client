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

export const BottomSheetContainer = styled.div`
    width: 23.4375rem;
    height: 40.3125rem;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0.25rem 0.25rem 0.8125rem 0 #00000040;
`

export const Container = styled.div`
    width: 100%;
    height: 34.0625rem;
    padding: 0.75rem 0 1.25rem 1rem;
`

export const Header = styled.div`
    width: 100%;
    min-height: 2rem;
    display: flex;
    margin-bottom: 1.1875rem;
`

export const Title1 = styled.p`
    width: 9.1875rem;
    height: 1.0625rem;
    margin: 1.125rem 0.6875rem 0 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.05rem;
    color: #060606;
`

export const OptionDescription = styled.p`
    width: 4.4375rem;
    height: 1.0625rem;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.05rem;
    color: #727272;
    margin-top: 1.125rem;
    margin-right: 5.5625rem;
`

export const CloseBtn = styled.button`
    width: 2rem;
    height: 2rem;
    margin-right: 0.5625rem;
    margin-bottom: 0.1875rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
`

export const HeaderOptionContainer = styled.div`
    width: 100%;
    min-height: 2.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2.6875rem;
`

export const Option = styled.div`
    width: 4.75rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 1rem;
    gap: 0.375rem;
    border-radius: 1.25rem;
    background-color: #FFFFFF;
    border: 0.0625rem solid #808080;
    p {
        /* width: 2.75rem;
        height: 1.25rem; */
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        color: #727272;
        letter-spacing: -0.4000000059604645px;
        text-align: left;
    }
`