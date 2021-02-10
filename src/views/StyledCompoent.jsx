import React from 'react';
import styled from 'styled-components';

const Blood = styled.div`
  color: red;
`;

const Content = styled(Blood)`
  padding-left: ${props => props.primary ? 40 : 20}px;
`;

const StyledComponent = () => <Content primary>Styled</Content>;

export default StyledComponent;
