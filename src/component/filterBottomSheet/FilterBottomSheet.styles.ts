import { motion } from "framer-motion";
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

export const BottomSheetContainer = styled(motion.div)`
    position: fixed;
    bottom: 0;
    left: 0;
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

export const Category = styled.div`
    width: 100%;
    min-height: 2rem;
    display: flex;
    margin-bottom: 1.1875rem;
`

export const CategoryTitle = styled.p`
    width: 9.1875rem;
    height: 1.0625rem;
    margin: 1.125rem 0.6875rem 0 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.05rem;
    color: #060606;
`

export const CategoryOptionDescription = styled.p`
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

export const CategoryOptionContainer = styled.div`
    width: 100%;
    min-height: 2.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2.6875rem;
    padding-right: 0.75rem;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`

export const CafeOptionContainer = styled.div<{ isSelected: boolean }>`
    width: 4.75rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const CafeOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.0625rem;
    height: 1.5rem;
`

export const CafeIconWrapper = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    img {
        width: 100%;
        height: 100%;
    }
`

export const CafeIconDescription = styled.p<{ isSelected: boolean }>`
    width: 1.5625rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const CutleryOptionContainer = styled.div<{ isSelected: boolean }>`
    width: 5.5rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const CutleryOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.875rem;
    height: 1.5rem;
`

export const CutleryIconWrapper = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    img {
        width: 100%;
        height: 100%;
    }
`

export const CutleryIconDescription = styled.p<{ isSelected: boolean }>`
    width: 2.375rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.025rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const CultureOptionContainer = styled.div<{ isSelected: boolean }>`
    width: 6.25rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const CultureOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.625rem;
    height: 1.5rem;
`

export const CultureIconWrapper = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    img {
        width: 100%;
        height: 100%;
    }
`

export const CultureIconDescription = styled.p<{ isSelected: boolean }>`
    width: 3.125rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.025rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const TourOptionContainer = styled.div<{ isSelected: boolean }>`
    width: 6.25rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const TourOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.625rem;
    height: 1.5rem;
`

export const TourIconWrapper = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    img {
        width: 100%;
        height: 100%;
    }
`

export const TourIconDescription = styled.p<{ isSelected: boolean }>`
    width: 3.125rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.025rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const NoiseLvOption = styled.div`
    width: 100%;
    min-height: 1.0625rem;
    display: flex;
    margin-bottom: 1.1875rem;
`

export const NoiseLvTitle = styled.p`
    width: 3.75rem;
    height: 1.0625rem;
    margin-right: 0.625rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.05rem;
    color: #060606;
`

export const NoiseLvOptionDescription = styled.p`
    width: 4.4375rem;
    height: 1.0625rem;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.05rem;
    color: #727272;
`

export const NoiseLvOptionContainer = styled.div`
    width: 100%;
    min-height: 9.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    margin-bottom: 1.3125rem;
`

export const QuietOptionContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

export const QuietOptionWrapper = styled.div<{ isSelected: boolean }>`
    width: 10.125rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 1rem;
    margin-right: 0.5625rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const QuietOption = styled.div`
    width: 8.125rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
`

export const QuietIconWrapper = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    img {
        width: 100%;
        height: 100%;
    }
`

export const QuietIconDescription = styled.div<{ isSelected: boolean }>`
    width: 6.5rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.025rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const Default = styled.p`
    width: 2.125rem;
    height: 1.0625rem;
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.05rem;
    color: #727272;
`

export const NormalOptionWrapper = styled.div<{ isSelected: boolean }>`
    width: 10.3125rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 1rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const NormalOption = styled.div`
    width: 8.3125rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
`

export const NormalIconWrapper = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    img {
        width: 100%;
        height: 100%;
    }    
`

export const NormalIconDescription = styled.div<{ isSelected: boolean }>`
    width: 6.6875rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.025rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};   
`

export const LoudOptionWrapper = styled.div<{ isSelected: boolean }>`
    width: 12.3125rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 1rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
` 

export const LoudOption = styled.div`
    width: 10.3125rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
`

export const LoudIconWrapper = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    img {
        width: 100%;
        height: 100%;
    }  
`

export const LoudIconDescription = styled.div<{ isSelected: boolean }>`
    width: 8.6875rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const RadiusTitle = styled.p`
    width: 1.75rem;
    height: 1.0625rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.05rem;
    color: #060606;
    margin-bottom: 0.625rem;
`

export const RadiusOptionContainer = styled.div`
    width: 100%;
    min-height: 8.75rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.625rem;
    margin-bottom: 1.25rem;
`

export const NearRadiusOptionWrapper = styled.div<{ isSelected: boolean }>`
    width: 6.1875rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 1rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const NearRadiusOption = styled.p<{ isSelected: boolean }>`
    width: 4.1875rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const NormalRadiusOptionWrapper = styled.div<{ isSelected: boolean }>`
    width: 5.4375rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 1rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const NormalRadiusOption = styled.p<{ isSelected: boolean }>`
    width: 3.4375rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const FarRadiusOptionWrapper = styled.div<{ isSelected: boolean }>`
    width: 5.5625rem;
    height: 2.5rem;
    padding: 0.625rem 1rem 0.625rem 1rem;
    border-radius: 1.25rem;
    background-color: ${({ isSelected }) => (isSelected ? "#F5F5F5" : "#FFFFFF")};
    border: ${({ isSelected }) => (isSelected ? "0.0625rem solid #007BFF" : "0.0625rem solid #808080")};
`

export const FarRadiusOption = styled.p<{ isSelected: boolean }>`
    width: 3.5625rem;
    height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${({ isSelected }) => (isSelected ? "#0062FF" : "#727272")};
`

export const BtnContainer = styled.div`
    width: 23.4375rem;
    height: 6.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -2px -1px 4px 0px #00000026;
`

export const BtnWrapper = styled.div`
    width: 20.375rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.875rem 1.5625rem 2.875rem 1.5rem;
    gap: 0.625rem;
`

export const ResetBtn = styled.button`
    width: 9.875rem;
    height: 2.5rem;
    padding: 0.3275rem 0.873125rem;
    border-radius: 0.436875rem;
    border: 0.054375rem solid #007bff;
    background-color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    text-align: center;
    color: #007BFF;
    cursor: pointer;
`

export const ApplyBtn = styled.button`
    width: 9.875rem;
    height: 2.5rem;
    padding: 0.3275rem 0.873125rem;
    border-radius: 0.436875rem;
    border: none;
    background-color: #007bff;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
`