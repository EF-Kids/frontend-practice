import { useCallback } from 'react';
import doSomething from './doSomething';

const useCameraCheck = () => {
  const cameraCheck = useCallback(async () => doSomething(), []);

  return { cameraCheck };
};

export default useCameraCheck;
