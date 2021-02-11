import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 667px;
  height: 375px;
  background-color: transparent;
  display: grid;
  grid-template-columns: 116px auto 129px;
  grid-template-rows: 55px auto;
`;

export const Left = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  z-index: 1;
`;

export const Center = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 0;

  > * {
    width: 420px;
    height: 320px;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
  }
`;

export const Right = styled.div`
  grid-column: 3 / 4;
`;
