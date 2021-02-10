import React, { useCallback } from 'react';
import * as S from './Button.styles';
import styled, { keyframes } from 'styled-components';
import { CheckEnum } from '../Page';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const expanding = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 6px #9ee3ff;
  }
  50% {
    box-shadow: 0 0 0 8px #9ee3ff;
  }
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: #0dbaff;
  border-radius: 50%;
  animation: ${expanding} 1s ease-in-out infinite;
`;

const SpeakerCheck = (props) => {
  const { updateResult, completeCheck } = props;

  const success = useCallback(() => {
    const result = { success: true };
    updateResult({ [CheckEnum.Speaker]: result });
    completeCheck();
  }, [updateResult, completeCheck]);

  const failure = useCallback(() => {
    const result = { success: false };
    updateResult({ [CheckEnum.Speaker]: result });
    completeCheck();
  }, [updateResult, completeCheck]);

  return (
    <Layout>
      <Center>
        <Circle />
      </Center>
      <S.Buttons>
        <S.Button primary onClick={success}>Success</S.Button>
        <S.Button onClick={failure}>Failure</S.Button>
      </S.Buttons>
    </Layout>
  );
};

export default SpeakerCheck;
