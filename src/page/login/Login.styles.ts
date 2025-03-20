import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 9.875rem 1rem 15.375rem 1rem;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 5.99875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 5.00125rem;
`

export const LogoWrapper = styled.div`
    width: 9.1875rem;
    height: 2.24875rem;
    & img {
        width: 100%;
        height: 100%;
    }
`

export const LogoTextWrapper = styled.div`
    width: 9.1875rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    & p {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #007BFF;
    }
`

export const InputContainer = styled.div`
    width: 21.4375rem;
    height: 6.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
`

export const InputWrapper = styled.div`
    width: 100%;
    height: 2.75rem;
    display: flex; /* 가로 정렬 */
    align-items: center; /* 세로 정렬 */
    background-color: #F5F5F5; /* 배경색 추가 */
    border-radius: 0.5rem;
    padding: 0.625rem 1rem 0.625rem 1rem; /* 내부 여백 */
`;

export const Icon = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.5rem;
  & img {
    width: 100%;
    height: 100%;
  }
`;