import React from 'react';
import Background from '../components/steps/Background';
import styled from 'styled-components';
import Page from '../components/steps/Page';

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Steps = () => {
  return (
    <Layout>
      <Page />
      <Background />
    </Layout>
  );
};

export default Steps;
