import React, { useRef, useEffect } from 'react';
import Icon from './Icon';

const IconNet = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#adb6be';
    ctx.strokeStyle = '#adb6be';

    const arc1 = new Path2D();
    arc1.arc(10, 19, 17, Math.PI * -0.3, Math.PI * 1.3, true);
    ctx.stroke(arc1);
    const arc2 = new Path2D();
    arc2.arc(10, 19, 13, Math.PI * -0.3, Math.PI * 1.3, true);
    ctx.stroke(arc2);
    const arc3 = new Path2D();
    arc3.arc(10, 19, 9, Math.PI * -0.3, Math.PI * 1.3, true);
    ctx.stroke(arc3);
    const arc4 = new Path2D();
    arc4.arc(10, 19, 5, Math.PI * -0.3, Math.PI * 1.3, true);
    ctx.stroke(arc4);
    const arc5 = new Path2D();
    arc5.arc(10, 18, 1, 0, Math.PI * 2, true);
    ctx.fill(arc5);
  }, []);

  return <Icon><canvas ref={ref} width={20} height={20} /></Icon>;
};

export default React.memo(IconNet);
