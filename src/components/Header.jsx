import React from 'react';
import styled from 'styled-components/macro';
import logo from '../images/logo.svg';

const ParentDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  width: 120px;
  height: 30px;
`;

const Attributes = styled.a`
  color: black;
  margin: 10px;
`;

const Login = styled.a`
  text-color: black;
  margin: 10px 10px 10px 0px;
`;

const MemberOptions = styled.div`
  margin: 10px 10px 10px auto;
`;

const Signup = styled.button`
  background-color: #2acfcf;
  border-color: white;
  border-radius: 30%;
  padding: 10px;
  color: white;
  margin: 10px;
`;

const Header = () => (
  <ParentDiv>
    <Logo />
    <Attributes>Features</Attributes>
    <Attributes>Pricing</Attributes>
    <Attributes>Resources</Attributes>
    <MemberOptions>
      <Login>Login</Login>
      <Signup>Sign Up</Signup>
    </MemberOptions>
  </ParentDiv>
);

export default Header;
