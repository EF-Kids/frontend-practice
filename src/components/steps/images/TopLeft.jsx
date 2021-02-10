import React from 'react';
import styled from 'styled-components';
import * as S from './styles';

const Cube = styled(S.Cube)`
  background-color: #56b555;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-40px, -50px) rotate(70deg);
`;

const TopLeft = () => (
  <S.Cube position={'absolute'} top={0} left={0}>
    <Cube />
  </S.Cube>
);

export default TopLeft;
