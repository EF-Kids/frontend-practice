import React, { useMemo } from 'react';
import * as S from './checks/Button.styles';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;

const Scrollbale = styled.div`
  width: 600px;
  height: 179px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;
`;

const Summary = (props) => {
  const { result, testAgain } = props;

  const allSuccess = useMemo(
    () => Object.keys(result).map((key) => result[key] && result[key].success).every(Boolean),
    [result],
  );

  return allSuccess
    ? <S.Button primary>Close</S.Button>
    : (
      <Layout>
        <Scrollbale>
          <pre>
            {JSON.stringify(result, null, 2)}
          </pre>
        </Scrollbale>
        <S.Buttons>
          <S.Button primary onClick={testAgain}>Test again</S.Button>
          <S.Button>Close</S.Button>
        </S.Buttons>
      </Layout>
    );
};

export default Summary;
