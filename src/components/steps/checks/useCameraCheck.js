import { useCallback } from 'react';

const useCameraCheck = () => {
  const getVideoStream = useCallback(
    async () =>
      new Promise((resolve) => {
        window.navigator.mediaDevices
          .getUserMedia({ video: { width: 320, height: 240 } })
          .then(resolve)
          .catch(() => resolve(false));
      }),
    []
  );

  return { getVideoStream };
};

export default useCameraCheck;
