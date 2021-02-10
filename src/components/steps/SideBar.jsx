import React from 'react';
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

const Step = styled.div`
  background-color: ${(props) => props.active ? '#fff': 'transparent'};
  box-shadow: ${(props) => props.active ? '0 2px 8px 0 rgba(0, 0, 0, 0.16)' : 'none'};
  border-radius: ${(props) => props.active ? '39px 0 0 39px' : '0'};

  padding: 0 38px 0 16px;
  height: 55px;
  color: #adb6be;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SideBar = (props) => {
  const { current } = props;

  return (
    <div >
      <Step active={current === 0}>
        <IconNum>1</IconNum>
        <IconNet />
      </Step>
      <Step active={current === 1}>
        <IconNum>2</IconNum>
        <IconCam />
      </Step>
      <Step active={current === 2}>
        <IconNum>3</IconNum>
        <IconMic />
      </Step>
      <Step active={current === 3}>
        <IconNum>4</IconNum>
        <IconVol />
      </Step>
    </div>
  );
};

export default SideBar;
