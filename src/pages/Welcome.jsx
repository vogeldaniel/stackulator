import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;

const Welcome = () => (
  <WelcomeBox>
    <h1> Welcome to Stackulator. </h1>
    <h2> A tool for learning the stack. </h2>
    <h6> By Daniel Vogel. </h6>
    <Link to="/app"> Try it now. </Link>
  </WelcomeBox>
);

export default Welcome;
