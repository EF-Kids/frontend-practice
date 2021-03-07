import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const MenuPortal = ({
  visible,
  direction,
  align,
  targetRef,
  children
}) => {
  const [styleObject, setStyleObject] = useState(() => ({ display: 'none' }));
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    el.current.style.cssText = 'position: fixed; top: 0; left: 0;';
    const rootEl = document.getElementById('portal-root');
    rootEl.appendChild(el.current);

    return () => {
      rootEl.removeChild(el.current);
    };
  }, []);

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    if (!visible) {
      setStyleObject({ display: 'none' });
      return;
    }

    const rect = targetRef.current.getBoundingClientRect();

    let obj = {};
    switch(direction) {
    case 'top':
      obj.bottom = window.innerHeight - rect.top;
      break;
    case 'left':
      obj.right = window.innerWidth - rect.left;
      break;
    case 'right':
      obj.left = rect.right;
      break;
    case 'bottom':
      obj.top = rect.bottom;
      break;
    }
    switch(align) {
    case 'top':
      obj.top = rect.top;
      break;
    case 'left':
      obj.left = rect.left;
      break;
    case 'right':
      obj.right = window.innerWidth - rect.right;
      break;
    case 'bottom':
      obj.bottom = window.innerHeight - rect.bottom;
      break;
    }
    setStyleObject({ ...obj, position: 'fixed' });
  }, [visible, direction, align, setStyleObject]);

  return createPortal(
    <div style={styleObject} data-react={'MenuPortal'}>
      {children}
    </div>,
    el.current,
  );
};

export default MenuPortal;
