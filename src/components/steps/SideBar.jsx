import React, { useCallback } from 'react';
import styled from 'styled-components';
import IconNet from './icons/IconNet';
import IconCam from './icons/IconCam';
import IconMic from './icons/IconMic';
import IconVol from './icons/IconVol';

const IconNum = styled.div`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #adb6be;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Step = styled.div`
  width: 116px;
  height: 55px;
  background-color: ${(props) => props.active ? '#fff': 'transparent'};
  color: #adb6be;
  position: relative;
  cursor: pointer;
`;

const StepInner = styled.div`
  width: calc(100% + 8px);
  height: 100%;
  border-radius: ${(props) => props.active ? '39px 0 0 39px' : '0'};
  box-shadow: ${(props) => props.active ? '0 2px 8px 0 rgba(0, 0, 0, 0.16)' : 'none'};
  padding: 0 38px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  pointer-events: none;
  user-select: none;
`;

const ShadowCutter = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: -16px;
  bottom: 0;
  width: 16px;
  height: 100%;
  background-color: ${(props) => props.active ? '#fff' : 'transparent'};
`;

const steps = [
  { index: 0, icon: IconNet },
  { index: 1, icon: IconCam },
  { index: 2, icon: IconMic },
  { index: 3, icon: IconVol },
];

const SideBar = (props) => {
  const { current, setCurrent } = props;

  const goToStep = useCallback((index) => () => setCurrent(index), [setCurrent]);

  return (
    <Layout>
      {steps.map((step) => (
        <Step
          key={step.index}
          active={current === step.index}
          onClick={goToStep(step.index)}
        >
          <StepInner active={current === step.index}>
            <IconNum>{step.index + 1}</IconNum>
            <step.icon />
          </StepInner>
          <ShadowCutter active={current === step.index} />
        </Step>
      ))}
    </Layout>
  );
};

export default SideBar;
