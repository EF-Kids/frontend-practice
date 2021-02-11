import React, { useCallback, useEffect, useRef, useState } from 'react';
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
    width: 160px;
    height: 120px;
    background-color: #000;
    transform: scaleX(-1);
  }
`;

const CameraCheck = (props) => {
  const { updateResult, goToNextStep } = props;

  const [result, setResult] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef(null);
  const { getVideoStream } = useCameraCheck();

  const closeStream = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }, []);

  const succeed = useCallback(() => {
    closeStream();
    setResult((prev) => ({ ...prev, success: true }));
    setTimeout(goToNextStep, 0);
  }, [closeStream, setResult, goToNextStep]);

  const fail = useCallback(() => {
    closeStream();
    setResult((prev) => ({ ...prev, success: false }));
    setFailed(true);
  }, [closeStream, setResult, setFailed]);

  const retry = useCallback(async () => {
    setFailed(false);
    setMounted(false);
    const streamResult = { stream: false };
    const videoStream = await getVideoStream();
    if (videoStream) {
      streamResult.stream = true;
      videoRef.current.srcObject = videoStream;
    } else {
      streamResult.stream = false;
    }
    setResult((prev) => ({ ...prev, ...streamResult }));
    setTimeout(() => setMounted(true), 0);
  }, [setFailed, setMounted, getVideoStream, setResult]);

  useEffect(() => {
    retry();
  }, [retry]);

  useEffect(() => {
    updateResult({ [CheckEnum.Camera]: result });
  }, [updateResult, result]);

  return (
    <Layout>
      {failed
        ? (
          <S.Buttons>
            <S.Button primary onClick={retry}>Retry</S.Button>
            <S.Button onClick={goToNextStep}>Next</S.Button>
          </S.Buttons>
        ) : (
          <>
            <Video>
              <video ref={videoRef} width={160} height={120} autoPlay={true} />
            </Video>
            <S.Buttons>
              <S.Button primary disabled={!mounted} onClick={succeed}>Success</S.Button>
              <S.Button disabled={!mounted} onClick={fail}>Failure</S.Button>
            </S.Buttons>
          </>
        )
      }
    </Layout>
  );
};

export default CameraCheck;
