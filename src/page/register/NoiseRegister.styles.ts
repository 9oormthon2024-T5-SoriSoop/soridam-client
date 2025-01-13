import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const BackBtnWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.875rem;
    margin-bottom: 0.6875rem;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
`

export const InfoContainer = styled.div`
    padding: 0 1rem;
`

export const LoctionInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 1.5rem;
    margin-bottom: 0.375rem;
`

export const LocationWrapper = styled.div`
    width: 9rem;
    height: 1.25rem;
    margin-top: 0.125rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: #060606;
`

export const NoiseLevelWrapper = styled.div`
    width: 4.625rem;
    height: 1.5rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;
`

export const NoiseImgWrapper = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    img {
        width: 100%;
        height: 100%;
    }
`

export const NoiseInfo = styled.p`
    width: 2.625rem;
    height: 1.5rem;
    color: #060606;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
`

export const DateTimeContainer = styled.div`
    width: 7.625rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 1.1875rem;
    p {
        color: #6D6D6D;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
    }
`

export const NoiseResultTitle = styled.p`
    width: 5.6875rem;
    height: 1.5rem;
    color: #060606;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    margin-bottom: 0.75rem;
`

export const NoiseResultWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.375rem;
`

export const DecibelWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 6.25rem;
    height: 2.125rem;
    gap: 0.625rem;
    border: 0.0625rem solid #808080;
    border-radius: 0.375rem;
    padding: 0.3125rem 0.3125rem 0.3125rem 0.625rem;
    p {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
        color: #000000;
    }
`

export const CommentTitle = styled.p`
    width: 100%;
    min-height: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #060606;
    margin-bottom: 0.75rem;
`

export const CommentInput = styled.textarea<{ borderColor: string }>`
    width: 21.4375rem;
    height: 6.4375rem;
    padding: 0.63rem;
    border-radius: 0.42rem;
    margin-bottom: 0.5rem;
    resize: none;
    outline: none;
    border: 0.0625rem solid ${(props) => props.borderColor};
    background-color: #F5F5F5;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: #060606;
    & ::placeholder {
        color: #808080;
    }
`

export const LimitInfo = styled.p<{ color: string }>`
    width: 100%;
    height: 1.25rem;
    margin-bottom: 3.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${(props) => props.color};
`

export const SubmitBtn = styled.button<{ backgroundColor: string }>`
    width: 21.25rem;
    height: 3.125rem;
    margin-right: 0.125rem;
    margin-left: 0.0625rem;
    border-radius: 3.625rem;
    border: none;
    cursor: pointer;
    padding: 0.9375rem 7.5625rem;
    font-family: 'Rubik';
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #FFFFFF;
    background-color:${(props) => props.backgroundColor};
`

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    width: 21.8125rem;
    min-height: 2.75rem;
    max-height: 4.25rem;
    padding: 0.625rem;
    gap: 0.625rem;
    margin: 0 0.8125rem 3.0625rem 0.8125rem; 
    background-color: #474747;
    text-align: center;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    opacity: 80%;
    border-radius: 0.5rem;
  }
`