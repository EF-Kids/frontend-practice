import styled from 'styled-components';

export const Cube = styled.div`
  width: 150px;
  height: 150px;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
`;
