import React, { useCallback, useEffect, useState } from 'react';
import SideBar from './SideBar';
import ConnectionCheck from './checks/ConnectionCheck';
import CameraCheck from './checks/CameraCheck';
import MicrophoneCheck from './checks/MicrophoneCheck';
import SpeakerCheck from './checks/SpeakerCheck';
import * as S from './Page.styles';
import Summary from './Summary';

export const CheckEnum = {
  Connection: 'connection',
  Camera: 'camera',
  Microphone: 'microphone',
  Speaker: 'speaker',
};

export const checks = [
  { key: CheckEnum.Connection, component: ConnectionCheck },
  { key: CheckEnum.Camera, component: CameraCheck },
  { key: CheckEnum.Microphone, component: MicrophoneCheck },
  { key: CheckEnum.Speaker, component: SpeakerCheck },
];

const initialState = {
  [CheckEnum.Connection]: null,
  [CheckEnum.Camera]: null,
  [CheckEnum.Microphone]: null,
  [CheckEnum.Speaker]: null,
};

const Page = () => {
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(() => initialState);
  const [complete, setComplete] = useState(false);

  const goToNextStep = useCallback(() => {
    setCurrent((prev) => (prev + 1) % checks.length);
  }, [setCurrent]);

  const updateResult = useCallback((stepResult) => {
    console.info('step result changed', stepResult);
    setResult((prev) => ({ ...prev, ...stepResult }));
  }, [setResult]);

  const completeCheck = useCallback(() => {
    setComplete(true);
  }, [setComplete]);

  const testAgain = useCallback(() => {
    setResult(initialState);
    setCurrent(0);
    setComplete(false);
  }, [setResult, setCurrent, setComplete]);

  useEffect(() => console.info('result changed', JSON.stringify(result, null, 2)), [result]);

  const { component: Component } = checks[current];

  return (
    <S.Overlay>
      {complete
        ? (
          <Summary result={result} testAgain={testAgain} />
        ) : (
          <S.Container>
            <S.Left>
              <SideBar
                current={current}
                result={result}
                setCurrent={setCurrent}
              />
            </S.Left>
            <S.Center>
              <Component
                goToNextStep={goToNextStep}
                updateResult={updateResult}
                completeCheck={completeCheck}
              />
            </S.Center>
          </S.Container>
        )}
    </S.Overlay>
  );
};

export default Page;
