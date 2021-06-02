import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../images/illustration-working.svg';

const Heading = styled.h1`
  color: black;
  font-weight: 500;
`;

const Footer = styled.h3`
  color: black;
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
`;

const Image = styled(Logo)`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// const Image = styled.div`
//   ${StyledLogo} {
//     height: 50%;
//     weight: 50&;
//   }
// `;

const Button = styled.div`
  background-color: #2acfcf;
  border-color: white;
  border-radius: 30%;
  padding: 10px;
  color: white;
  margin: 10px;
`;

const Center = () => (
  <Wrapper>
    <div>
      <Heading> More than just shorter links </Heading>
      <Footer>
        {' '}
        Build your brand&apos;s recognition and get detailed insights on how your links are
        performing
      </Footer>
      <Button>Get Started</Button>
    </div>
    <Image />
  </Wrapper>
);

export default Center;
