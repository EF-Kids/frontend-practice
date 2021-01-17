import React, { useCallback, useEffect, useRef  } from 'react';
import { createPortal } from 'react-dom';
import styles from './Drawer.module.less';

const DrawerWrapper = ({ children, visible, hideDrawer }) => {
  const containerRef = useRef(null);

  const clickOverlay = useCallback((e) => {
    if (!containerRef.current.contains(e.target)) {
      hideDrawer();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', clickOverlay, true);

    return () => {
      document.removeEventListener('click', clickOverlay, true);
    };
  });

  return (
    <div
      className={[
        styles.DrawerOverlay,
        visible ? styles.visible : styles.invisible,
      ].join(' ')}
      onClick={clickOverlay}
    >
      <aside
        className={[
          styles.DrawerContainer,
          visible ? styles.visible : styles.invisible,
        ].join(' ')}
        ref={containerRef}
      >
        {children}
      </aside>
    </div>
  );
};

const Drawer = ({ children, visible, hideDrawer }) => {
  let el = useRef(document.createElement('div'));

  useEffect(() => {
    const rootEl = document.getElementById('portal-root');
    rootEl.appendChild(el.current);
    el.current.className = styles.DrawerAnchor;

    return () => {
      rootEl.removeChild(el.current);
    };
  }, []);

  return createPortal(
    <DrawerWrapper visible={visible} hideDrawer={hideDrawer}>
      {children}
    </DrawerWrapper>,
    el.current,
  );
};

export default Drawer;
