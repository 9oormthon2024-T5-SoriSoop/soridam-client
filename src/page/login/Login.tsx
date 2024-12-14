import React, { useState } from "react";
import styled from "styled-components";
import NoiseList from "../../component/noiseList/NoiseList"; // NoiseList 컴포넌트 경로

import emailIcon from "../../assets/icons/ico_login_email.png";
import passwordIcon from "../../assets/icons/ico_login_password.png";

const Login = () => {
  const [showNoiseList, setShowNoiseList] = useState(false); // NoiseList 화면 표시 여부

  const handleShowNoiseList = () => {
    setShowNoiseList(true); // 버튼 클릭 시 NoiseList 화면으로 전환
  };

  // NoiseList 화면이 표시되면 해당 컴포넌트 렌더링
  if (showNoiseList) {
    return <NoiseList />;
  }

  // 기본 로그인 화면
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Form>
        <InputWrapper>
          <Icon src={emailIcon} alt="이메일 아이콘" />
          <Input type="text" placeholder="ID" />
        </InputWrapper>
        <InputWrapper>
          <Icon src={passwordIcon} alt="비밀번호 아이콘" />
          <Input type="password" placeholder="password" />
        </InputWrapper>
        <LoginButton>로그인</LoginButton>
        {/* NoiseList 화면 전환 버튼 추가 */}
        <NoiseListButton onClick={handleShowNoiseList}>
          Noise List 보기
        </NoiseListButton>
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

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
  background-color: #ffffff;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
`;

const Logo = styled.div`
  width: 120px;
  height: 60px;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666666;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
`;

const Form = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f7f7;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: #f7f7f7;
  color: #333;
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

const NoiseListButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e7e34;
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