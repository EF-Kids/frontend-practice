import Home from '../views/Home';
import StyledCompoent from '../views/StyledCompoent';
import Modal from '../views/Modal';
import List from '../views/List';
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
    path: '/steps',
    component: Steps,
  },
  {
    path: '/styled-component',
    component: StyledCompoent,
  },
];

export default routes;
