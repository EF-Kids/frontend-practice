import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const [result, setResult] = useState(null);
  const { getAudioStream, getDecibels } = useMicrophoneCheck();
  let streamRef = useRef(null);

  const closeStream = useCallback(() => {
    streamRef.current?.getTracks().forEach(
      (track) => track.stop(),
    );
  }, []);

  const retry = useCallback(async () => {
    setChecking(true);
    streamRef.current = await getAudioStream();
    const decibelResult = await getDecibels(streamRef.current);
    setResult(decibelResult);
    setTimeout(() => setChecking(false), 0);
  }, [setChecking, getAudioStream, getDecibels, setResult]);

  useEffect(() => {
    retry();
    return () => {
      closeStream();
    };
  }, [retry, closeStream]);

  useEffect(() => {
    updateResult({ [CheckEnum.Microphone]: result });
    if (result?.success) {
      setTimeout(goToNextStep, 0);
    }
  }, [updateResult, result, goToNextStep]);

  return (
    <Layout>
      {checking
        ? (
          <Center>
            <Circle />
          </Center>
        ) : (
          <S.Buttons>
            <S.Button primary onClick={retry}>Retry</S.Button>
            <S.Button onClick={goToNextStep}>Next</S.Button>
          </S.Buttons>
        )}
    </Layout>
  );
};

export default MicrophoneCheck;
