import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CheckEnum } from '../Page';
import useCameraCheck from './useCameraCheck';
import * as S from './Button.styles';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;

const Video = styled.div`
  display: flex;
  justify-content: center;

  video {
    background-color: #000;
  }
`;

const CameraCheck = (props) => {
  const { updateResult, goToNextStep } = props;

  const [mounted, setMounted] = useState(false);
  const [, setResult] = useState(null);
  const { cameraCheck } = useCameraCheck();

  const check = useCallback(async () => {
    setMounted(false);
    const resultSuccess = await cameraCheck();
    const result = { success:  resultSuccess };
    setResult(result);
    updateResult({ [CheckEnum.Camera]: result });
    setTimeout(() => setMounted(true), 0);
  }, [setMounted, setResult, updateResult]);

  useEffect(() => {
    check();
  }, [check]);

  return (
    <Layout>
      <Video>
        <video width={160} height={120} autoPlay={true} />
      </Video>
      <S.Buttons>
        <S.Button primary disabled={!mounted} onClick={check}>Retry</S.Button>
        <S.Button disabled={!mounted} onClick={goToNextStep}>Next</S.Button>
      </S.Buttons>
    </Layout>
  );
};

export default CameraCheck;
