import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled.div<{ isOpen: boolean }>`
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 6.25rem;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const BottomSheet = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    position: fixed;
    bottom: 6.25rem; /* NavigationBar 높이 고려 */
    left: auto;
    right: auto;
    width: 23.4375rem;
    min-height: 25.875rem;
    background: white;
    padding: 0 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: hidden;
`;

export const Header = styled.div`
    width: 21.4375rem;
    height: 1.5rem;
    margin-top: 3.4375rem;
    display: flex;
    align-items: center;
`

export const BackBtn = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    margin-right: 5.8125rem;
    & img {
        width: 100%;
        height: 100%;
    }
`

export const MenuTitle = styled.p`
    width: 6.8125rem;
    height: 1.5rem;
    font-size: 1.25rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: #060606;
`

export const LocationInfoContainer = styled.div`
    width: 21.4375rem;
    height: 3.25rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`

export const LocationInfoWrapper = styled.div`
    width: 21.4375rem;
    height: 3.25rem;
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Location = styled.h2`
    width: 9rem;
    height: 1.25rem;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.25rem;
    color: #060606;
`

export const LocationNoieInfoWrapper = styled.div`
    width: 4.625rem;
    height: 1.5rem;
    display: flex;
    gap: 0.5rem;
`

export const NoiseInfoImg = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const NoiseInfo = styled.p`
    width: 2.625rem;
    height: 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #060606;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CurrentDateTimeContainer = styled.div`
    width: 8rem;
    height: 1.5rem;
    display: flex;
    gap: 0.25rem;
`

export const CurrentDateWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #6D6D6D;
`

export const CurrentTimeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #6D6D6D;
`

export const ReviewContainer = styled.div`
    width: 21.4375rem;
    height: 26.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const ReviewTitle = styled.p`
    width: 100%;
    height: 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: #060606;
`

export const ReviewList = styled.ul`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`

export const Review = styled.li`
    width: 100%;
    height: 4.25rem;
    border-radius: 0.42rem;
    border: 1px solid #808080;
    padding: 0.625rem;
    background-color: #F5F5F5;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #060606;
`