import styled from "styled-components";

interface SearchBarContainerProps {
    isFocused: boolean;
}

export const SearchBarContainer = styled.div<SearchBarContainerProps>`
    width: ${({ isFocused }) => (isFocused ? "100%" : "16.25rem")};
    height: ${({ isFocused }) => (isFocused ? "auto" : "2.5rem")};
    display: flex;
    align-items: center;
    margin: ${({ isFocused }) => (isFocused ? "0" : "0.6875rem 0.8125rem 0.625rem 1rem")};
    padding:  ${({ isFocused }) => (isFocused ? "0.375rem 0 0.5625rem 0" : "0.5rem 3.25rem 0.5rem 0.75rem")};
    gap: 0.5rem;
    border-radius: ${({ isFocused }) => (isFocused ? "0" : "6.25rem")};
    border: ${({ isFocused }) => (isFocused ? "none" : "0.0625rem solid #808080")};
    border-bottom: ${({ isFocused }) => (isFocused ? "2px solid #DDE2E5" : "0.0625rem solid #808080")};
    background-color: ${({ isFocused }) => (isFocused ? "#fff" : "#F5F5F5")};
    img {
        width: ${({ isFocused }) => (isFocused ? "3rem" : "1.5rem")};
        height: ${({ isFocused }) => (isFocused ? "3rem" : "1.5rem")};
    }
`

export const SearchInput = styled.input<SearchBarContainerProps>`
    width: ${({ isFocused }) => (isFocused ? "100%" : "9.4375rem")};
    min-height: 1.5rem;
    outline: none;
    border: none;
    background-color: transparent;
    padding-right: 0.625rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    & ::placeholder {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
    }
`