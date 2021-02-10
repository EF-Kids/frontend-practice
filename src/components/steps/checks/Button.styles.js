import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 130px;
  height: 42px;
  border-radius: 22.5px;
  background-color: ${(props) => (props.primary ? '#14baff' : '#ffffff')};
  border: solid 1px ${(props) => (props.primary ? '#14baff' : '#e6e6e6')};
  color: ${(props) => (props.primary ? '#fff' : '#474747')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:disabled {
    background-color: #adb6be;
    border: solid 1px #adb6be;
    color: #fff;
  }
`;
