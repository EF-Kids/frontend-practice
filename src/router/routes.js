import Home from '../views/Home';
import StyledCompoent from '../views/StyledCompoent';
import Modal from '../views/Modal';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/modal',
    component: Modal,
  },
  {
    path: '/styled-component',
    component: StyledCompoent,
  },
];

export default routes;
