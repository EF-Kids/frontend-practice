import React, { useRef, useEffect } from 'react';
import Icon from './Icon';

const IconVol = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#adb6be';
    ctx.strokeStyle = '#adb6be';

    const line1 = new Path2D();
    line1.rect(2, 7, 4, 1);
    ctx.fill(line1);
    const line2 = new Path2D();
    line2.rect(2, 12, 4, 1);
    ctx.fill(line2);
    const line3 = new Path2D();
    line3.rect(2, 7, 1, 6);
    ctx.fill(line3);
    const line4 = new Path2D();
    line4.rect(10, 3, 1, 14);
    ctx.fill(line4);
    const line5 = new Path2D();
    line5.moveTo(6, 8);
    line5.lineTo(10, 4);
    ctx.stroke(line5);
    const line6 = new Path2D();
    line6.moveTo(6, 12);
    line6.lineTo(10, 16);
    ctx.stroke(line6);
    const arc1 = new Path2D();
    arc1.arc(9, 10, 9, Math.PI * 0.25, Math.PI * -0.25, true);
    ctx.stroke(arc1);
    const arc2 = new Path2D();
    arc2.arc(11, 10, 4, Math.PI * 0.3, Math.PI * -0.3, true);
    ctx.stroke(arc2);
  }, []);

  return <Icon><canvas ref={ref} width={20} height={20} /></Icon>;
};

export default React.memo(IconVol);
