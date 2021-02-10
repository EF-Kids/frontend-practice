import React from 'react';
import styled from 'styled-components';
import * as S from './styles';

const Cube = styled(S.Cube)`
  background-color: #ffef03;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(40px,40px) rotate(70deg);
`;

const BottomRight = () => (
  <S.Cube position={'absolute'} bottom={0} right={0}>
    <Cube />
  </S.Cube>
);

export default BottomRight;
