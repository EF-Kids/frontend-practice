import React, { useRef, useEffect } from 'react';
import Icon from './Icon';

const IconCam = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#adb6be';
    ctx.strokeStyle = '#adb6be';

    const circle1 = new Path2D();
    circle1.arc(10, 9, 7, 0, Math.PI * 2, true);
    ctx.stroke(circle1);
    const circle2 = new Path2D();
    circle2.arc(10, 9, 3, 0, Math.PI * 2, true);
    ctx.stroke(circle2);
    const line1 = new Path2D();
    line1.rect(10, 16, 1, 4);
    ctx.fill(line1);
    const line2 = new Path2D();
    line2.rect(6, 19, 9, 1);
    ctx.fill(line2);
  }, []);

  return <Icon><canvas ref={ref} width={20} height={20} /></Icon>;
};

export default React.memo(IconCam);
