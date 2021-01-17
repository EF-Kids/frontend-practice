import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import RouterView from './router/RouterView';
import RouteDrawer from './components/drawer/RouteDrawer';
import styles from './App.module.less';

const App = () => (
  <Router>
    <div className={styles.App}>
      <RouterView />
      <RouteDrawer />
    </div>
  </Router>
);

export default App;
