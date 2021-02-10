import React, { useRef, useEffect } from 'react';
import Icon from './Icon';

const IconMic = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#adb6be';
    ctx.strokeStyle = '#adb6be';

    const arc1 = new Path2D();
    arc1.arc(10, 5, 3, Math.PI * -0.1, Math.PI * 1.1, true);
    ctx.stroke(arc1);
    const arc2 = new Path2D();
    arc2.arc(10, 10, 3, Math.PI * 0.9, Math.PI * 0.1, true);
    ctx.stroke(arc2);
    const line1 = new Path2D();
    line1.rect(7, 4, 1, 7);
    ctx.fill(line1);
    const line2 = new Path2D();
    line2.rect(12, 4, 1, 7);
    ctx.fill(line2);
    const arc3 = new Path2D();
    arc3.arc(10, 12, 4, Math.PI * 0.8, Math.PI * 0.15, true);
    ctx.stroke(arc3);
    const line3 = new Path2D();
    line3.rect(10, 16, 1, 4);
    ctx.fill(line3);
    const line4 = new Path2D();
    line4.rect(6, 19, 9, 1);
    ctx.fill(line4);
  }, []);

  return <Icon><canvas ref={ref} width={20} height={20} /></Icon>;
};

export default React.memo(IconMic);
