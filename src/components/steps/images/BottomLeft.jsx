import React from 'react';
import styled from 'styled-components';
import * as S from './styles';

const Cube = styled(S.Cube)`
  background-color: #00baff;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-45px,30px) rotate(60deg);
`;

const BottomLeft = () => (
  <S.Cube position={'absolute'} bottom={0} left={0}>
    <Cube />
  </S.Cube>
);

export default BottomLeft;
