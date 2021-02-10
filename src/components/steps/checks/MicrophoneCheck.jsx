import React, { useCallback, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import * as S from './Button.styles';
import useMicrophoneCheck from './useMicrophoneCheck';
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

const MicrophoneCheck = (props) => {
  const { updateResult, goToNextStep } = props;

  const [checking, setChecking] = useState(true);
  const [, setResult] = useState(null);
  const { microphoneCheck } = useMicrophoneCheck();

  const check = useCallback(async () => {
    setChecking(true);
    const resultSuccess = await microphoneCheck();
    const _result = { success: resultSuccess };
    setResult(_result);
    updateResult({ [CheckEnum.Microphone]: _result });
    if (resultSuccess) {
      goToNextStep();
    }
    setTimeout(() => setChecking(false), 0);
  }, [microphoneCheck, setResult, updateResult, goToNextStep]);

  useEffect(() => {
    check();
  }, [check]);

  return (
    <Layout>
      {checking
        ? (
          <Center>
            <Circle />
          </Center>
        ) : (
          <S.Buttons>
            <S.Button primary onClick={check}>Retry</S.Button>
            <S.Button onClick={goToNextStep}>Next</S.Button>
          </S.Buttons>
        )}
    </Layout>
  );
};

export default MicrophoneCheck;
