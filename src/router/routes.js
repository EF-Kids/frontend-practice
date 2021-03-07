import Home from '../views/Home';
import Modal from '../views/Modal';
import List from '../views/List';
import Portal from '../views/Portal';
import Steps from '../views/Steps';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/list',
    component: List,
  },
  {
    path: '/modal',
    component: Modal,
  },
  {
    path: '/portal',
    component: Portal,
  },
  {
    path: '/steps',
    component: Steps,
  },
];

export default routes;
