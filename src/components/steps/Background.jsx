import React from 'react';
import styled from 'styled-components';
import TopLeft from './images/TopLeft';
import TopRight from './images/TopRight';
import BottomLeft from './images/BottomLeft';
import BottomRight from './images/BottomRight';

const Wallpaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  pointer-events: none;
  user-select: none;
`;

const Background = () => {
  return (
    <Wallpaper>
      <TopLeft />
      <TopRight />
      <BottomLeft />
      <BottomRight />
    </Wallpaper>
  );
};

export default Background;
