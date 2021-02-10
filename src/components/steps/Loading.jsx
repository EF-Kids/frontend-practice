import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  background-color: transparent;
  height: 300px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const movingRight = keyframes`
  0%, 100% {
    background-color: rgba(20, 186, 255, 0.3);
  }
  50% {
    background-color: #14baff;
  }
`;

const Dot = styled.div`
  margin: 0 3.5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: ${movingRight} 1s linear infinite;

  &:nth-child(1) {
    animation-delay: -0.875s;
  }

  &:nth-child(2) {
    animation-delay: -0.75s;
  }

  &:nth-child(3) {
    animation-delay: -0.625s;
  }

  &:nth-child(4) {
    animation-delay: -0.5s;
  }

  &:nth-child(5) {
    animation-delay: -0.375s;
  }

  &:nth-child(6) {
    animation-delay: -0.25s;
  }

  &:nth-child(7) {
    animation-delay: -0.125s;
  }
`;

const dots = Array.from({ length: 8 }).map((_, i) => i);

const Loading = () => (
  <Container>{dots.map((dot) => <Dot key={dot} />)}</Container>
);

export default React.memo(Loading);
