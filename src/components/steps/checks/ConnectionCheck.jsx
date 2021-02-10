import React, { useCallback, useEffect, useState } from 'react';
import useNetwork from 'react-use/esm/useNetwork';
import * as S from './Button.styles';
import Loading from '../Loading';
import { CheckEnum } from '../Page';
import useConnectionCheck from './useConnectionCheck';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const ConnectionCheck = (props) => {
  const { goToNextStep, updateResult } = props;

  const network = useNetwork();
  const [loading, setLoading] = useState(true);
  const [, setResult] = useState(null);
  const { connectionCheck } = useConnectionCheck();

  const check = useCallback(async () => {
    setLoading(true);
    const resultSuccess = await connectionCheck();
    const result = { success: resultSuccess };
    setResult(result);
    updateResult({ [CheckEnum.Connection]: result });
    if (resultSuccess) {
      goToNextStep();
    }
    setTimeout(() => setLoading(false), 0);
  }, [setLoading, setResult, updateResult,  goToNextStep]);

  useEffect(() => {
    check();
  }, [check]);

  return (
    loading
      ? <Loading />
      : (
        <Layout>
          <div>{JSON.stringify(network, null, 2)}</div>
          <S.Buttons>
            <S.Button primary onClick={check}>Retry</S.Button>
            <S.Button onClick={goToNextStep}>Next</S.Button>
          </S.Buttons>
        </Layout>
      )
  );
};

export default ConnectionCheck;
