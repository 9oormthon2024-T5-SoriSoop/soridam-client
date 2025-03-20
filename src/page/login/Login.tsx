import React from "react";
import styled from "styled-components";

import emailIcon from "../../assets/icons/ico_login_email.png";
import passwordIcon from "../../assets/icons/ico_login_password.png";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg"
import { Container, Icon, InputContainer, InputWrapper, LogoContainer, LogoTextWrapper, LogoWrapper } from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoWrapper>
          <img src={Logo} alt="logo" />
        </LogoWrapper>
        <LogoTextWrapper>
          <p>나만의 소음 데이터, </p>
          <p>로그인하고 저장하세요!</p>
        </LogoTextWrapper>
      </LogoContainer>
      <Form>
        <InputContainer>
          <InputWrapper>
              <Icon>
                <img src={emailIcon} alt="이메일 아이콘" /> 
              </Icon>
              <Input type="text" placeholder="ID" />
          </InputWrapper>
          <InputWrapper>
              <Icon>
                <img src={passwordIcon} alt="비밀번호 아이콘" />
              </Icon>
              <Input type="password" placeholder="password" />
          </InputWrapper>
        </InputContainer>
        <NavLink to={'/measure'}>
          <LoginButton>로그인</LoginButton>
        </NavLink>
      </Form>
      <Links>
        <Link href="#">아이디 찾기</Link>
        <Divider>|</Divider>
        <Link href="#">비밀번호 찾기</Link>
        <Divider>|</Divider>
        <Link href="#">회원가입</Link>
      </Links>
    </Container>
  );
};

export default Login;




const Form = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
`;





const Input = styled.input`
  flex: 1;
  border: none; /* 기본 테두리 제거 */
  outline: none; /* 포커스 시 생기는 파란색 테두리 제거 */
  font-size: 14px;
  background-color: #f7f7f7; /* Input 배경색을 InputWrapper와 동일하게 설정 */
  color: #333; /* 입력 텍스트 색상 */
  &::placeholder {
    color: #aaaaaa;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Links = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaaaaa;
  font-size: 12px;
`;

const Link = styled.a`
  color: #aaaaaa;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.span`
  margin: 0 10px;
  color: #aaaaaa;
`;
