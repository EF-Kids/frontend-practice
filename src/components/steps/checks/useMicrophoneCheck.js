import { useCallback } from 'react';
import doSomething from './doSomething';

// root mean square
const rms = (arr = []) =>
  Math.sqrt(arr.reduce((acc, val) => acc + val * val, 0) / arr.length);
// decibel formula
const decibel = (arr = []) => Math.round(20 * Math.log10(rms(arr)));
// normalize bytes
const normalize = (arr = []) => {
  const floats = [];
  arr.forEach((val) => floats.push(Number(val) / 128.0 - 1.0));
  return floats;
};

const poll = async (cb, interval = 50, times = 100) =>
  new Promise((resolve, reject) => {
    let count = times;
    const _poll = () => {
      if (cb()) {
        return resolve();
      }

      if (count < 0) {
        return reject(Error(`Cannot poll within ${times} * ${interval}ms`));
      }
      count -= 1;
      setTimeout(_poll, interval);
    };
    _poll();
  });

const useMicrophoneCheck = () => {
  const getAudioStream = useCallback(
    async () =>
      new Promise((resolve) => {
        window.navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then(resolve)
          .catch(() => resolve(false));
      }),
    []
  );

  const getDecibels = useCallback(async (stream) => {
    if (!stream) {
      return { success: false, decibels: [] };
    }

    const threshold = await doSomething(-20.0);
    const audio = new window.AudioContext();
    const source = audio.createMediaStreamSource(stream);
    const filter = audio.createBiquadFilter();
    source.connect(filter);
    const analyser = audio.createAnalyser();
    filter.connect(analyser);

    let decibels = [];
    try {
      await poll(() => {
        const bytes = new Uint8Array(analyser.fftSize);
        analyser.getByteTimeDomainData(bytes);
        const value = decibel(normalize(bytes.slice()));
        if (value > -Infinity) {
          decibels = decibels
            .slice(Math.max(0, decibels.length - 99))
            .concat(value);
        }
        return value > threshold;
      });
      return { success: true, decibels };
    } catch (err) {
      console.warn(err);
      return { success: false, decibels };
    }
  }, []);

  return { getAudioStream, getDecibels };
};

export default useMicrophoneCheck;
