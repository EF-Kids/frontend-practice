import { useCallback } from 'react';
import doSomething from './doSomething';

const useMicrophoneCheck = () => {
  const microphoneCheck = useCallback(async () => doSomething(), []);

  return { microphoneCheck };
};

export default useMicrophoneCheck;
