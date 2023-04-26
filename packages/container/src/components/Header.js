import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Wrapper>
      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 80px;
  background-color: #5a6ed4;
  margin: -8px;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 24px;
  }
`;
