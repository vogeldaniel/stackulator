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
    <h1> Stackulator. </h1>
    <h2> Learn the stack. </h2>
    <h6> By Daniel Vogel. </h6>
    <Link to="/app"> Try it now. </Link>
    <a href="https://github.com/vogeldaniel/stackulator"> View the source. </a>
  </WelcomeBox>
);

export default Welcome;
