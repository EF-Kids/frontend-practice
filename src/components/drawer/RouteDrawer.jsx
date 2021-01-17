import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom/';
import Drawer from './Drawer';
import routes from '../../router/routes';
import styles from './RouteDrawer.module.less';

const RouteDrawer = () => {
  const history = useHistory();
  const [visible, setDrawerVisible] = useState(false);

  const showDrawer = useCallback(() => setDrawerVisible(true), [setDrawerVisible]);
  const hideDrawer = useCallback(() => setDrawerVisible(false), [setDrawerVisible]);

  const clickLink = useCallback((e) => {
    hideDrawer();
    const nextRoute = e.target.getAttribute('data-route');
    if (nextRoute) {
      history.push(nextRoute);
    }
  }, [hideDrawer, history.push]);

  return (
    <div className={styles.anchor}>
      <button className={styles.button} onClick={showDrawer} disabled={visible} >
        <i className="icon-right" />
      </button>
      <Drawer visible={visible} hideDrawer={hideDrawer}>
        <div className={[
          styles.RouteDrawer,
          visible ? styles.show : styles.hide,
        ].join(' ')}>
          {routes.map((route) => (
            <div key={route.path} className={styles.link} onClick={clickLink} data-route={route.path}>
              {route.path}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default RouteDrawer;
