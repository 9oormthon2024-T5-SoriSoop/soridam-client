import styled from "styled-components";

export const Container = styled.div`
    width: 23.4375rem;
    height: 44.5rem;
    padding: 4rem 0.75rem 1.3125rem 1.0625rem;
`

export const Header = styled.div`
    width: 100%;
    min-height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.375rem;
`

export const LogoWrapper = styled.div`
    width: 104px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.0625rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const InfoWrapper = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const ChartContainer = styled.div<{ isRecording: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 21.25rem;
    height: 27.75rem;
    margin-right: 0.375rem;
    margin-bottom: 1.125rem;
    padding: 0.75rem 0.75rem 0.8125rem;
    border-radius: 1rem;
    background-color: ${({ isRecording }) => (isRecording ? '#F4F8FF' : '#F4F4F4')};
    border: 2px solid ${({ isRecording }) => (isRecording ? '#CFE2FF' : '#D7D7D7')};
`

export const InfoHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 19.25rem;
    margin-bottom: 1.0625rem;
    padding-right: 0.25rem;
    padding-left: 0.25rem;
`

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15.125rem;
    height: 3.75rem;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #6D6D6D;
`