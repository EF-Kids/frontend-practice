import { useCallback } from 'react';
import doSomething from './doSomething';

const useConnectionCheck = () => {
  const connectionCheck = useCallback(async () => doSomething(), []);

  return { connectionCheck };
};

export default useConnectionCheck;
