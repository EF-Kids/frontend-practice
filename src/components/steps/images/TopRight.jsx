import React from 'react';
import styled from 'styled-components';
import * as S from './styles';

const Cube = styled(S.Cube)`
  background-color: #99137e;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40px,-20px) rotate(10deg);
`;

const TopRight = () => (
  <S.Cube position={'absolute'} top={0} right={0}>
    <Cube />
  </S.Cube>
);

export default TopRight;
