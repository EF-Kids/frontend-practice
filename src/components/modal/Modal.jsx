import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.less';

const ModalWrapper = ({ children }) => {
  return (
    <div className={styles.ModalRelay}>
      <div className={styles.ModalContainer}>
        {children}
      </div>
    </div>
  );
};

const Modal = ({ children }) => {
  let el = useRef(document.createElement('div'));

  useEffect(() => {
    const rootEl = document.getElementById('portal-root');
    rootEl.appendChild(el.current);
    el.current.className = styles.ModalAnchor;

    return () => {
      rootEl.removeChild(el.current);
    };
  }, []);

  return createPortal(<ModalWrapper>{children}</ModalWrapper>, el.current);
};

export default Modal;
