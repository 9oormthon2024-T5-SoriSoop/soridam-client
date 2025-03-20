import styled from "styled-components";

export const PageBG = styled.div`
    width: 23.4375rem;
    height: 44.5rem;
    padding: 3.375rem 1rem 0 1.375rem;
    background-color: #F5F5F5;
`

export const Header = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 0.875rem;
`

export const InfoWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        width: 100%;
        height: 100%;
    }
`

export const SettingWrapper = styled.div`
    width: 1.6875rem;
    height: 1.6875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        width: 100%;
        height: 100%;
    }
`

export const NoiseDataList = styled.ul`
    width: 20.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
`

export const NoiseData = styled.li`
    width: 20.75rem;
    height: 7.875rem;
    display: flex;
    gap: 0.625rem;
    background-color: #FFFFFF;
    border-radius: 0.75rem;
    padding: 1.25rem 0 1.25rem 0.625rem;
    &:last-child { 
        margin-bottom: 6.25rem; 
    }
`

export const Marker = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 3.75rem;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        width: 2rem;
        height: 2rem;
    }
`

export const DataInfoContainer = styled.div`
    width: 16.125rem;
    height: 5.375rem;
`

export const DataInfoWrapper = styled.div`
    width: 16.125rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`

export const LocationInfoContainer = styled.div`
    width: 8.625rem;
    height: 3rem;
`

export const LocationWrapper = styled.p`
    width: 100%;
    height: 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: #060606;
    display: flex;
    align-items: center;
`

export const DataDateContainer = styled.div`
    width: 6.625rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DateWrapper = styled.p`
    width: 4.1875rem;
    height: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #6D6D6D;
`

export const TimeWrapper = styled.p`
    width: 2.1875rem;
    height: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #6D6D6D;
`

export const DetailBtn = styled.button`
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    & img {
        width: 100%;
        height: 100%;
    }
`

export const NoiseContainer = styled.div`
    width: 16.125rem;
    height: 1.875rem;
    display: flex;
    align-items: center;
`

export const AvgNoiseWrapper = styled.p`
    width: 4.0625rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    border-radius: 0.375rem;
    background-color: #F5F5F5;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #6D6D6D;
`

export const MaxNoiseWrapper = styled.p`
    width: 4.0625rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: #F5F5F5;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: #6D6D6D;
`