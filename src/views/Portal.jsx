import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/portal/Menu';
import MenuPortal from '../components/portal/MenuPortal';
import MenuButton from '../components/portal/MenuButton';

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    color: #333;
  }
`;

const Area = styled.div`
  background-color: #fff;
  padding: 10px 20px;
  margin: 1px 0;
`;

const Button = styled.button`
  margin: 10px 0;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #d9d9d9;
  color: #333;
  padding: 5px;
`;

const Portal = () => {
  const menuRef1 = useRef(null);
  const menuRef2 = useRef(null);
  const [menuOpened1, setMenuOpened1] = useState(false);
  const [menuOpened2, setMenuOpened2] = useState(false);

  const toggleMenu1 = useCallback(() => setMenuOpened1((prev) => !prev), [setMenuOpened1]);
  const toggleMenu2 = useCallback(() => setMenuOpened2((prev) => !prev), [setMenuOpened2]);

  return (
    <Layout>
      <Area>
        <MenuButton ref={menuRef1} onClick={toggleMenu1}>Menu</MenuButton>
        <MenuPortal
          targetRef={menuRef1}
          visible={menuOpened1}
          direction={'bottom'}
          align={'right'}
        >
          <Menu />
        </MenuPortal>
        <MenuPortal
          targetRef={menuRef1}
          visible={menuOpened1}
          direction={'right'}
          align={'top'}
        >
          <Menu />
        </MenuPortal>
        <MenuPortal
          targetRef={menuRef1}
          visible={menuOpened1}
          direction={'top'}
          align={'left'}
        >
          <Menu />
        </MenuPortal>
        <MenuPortal
          targetRef={menuRef1}
          visible={menuOpened1}
          direction={'left'}
          align={'bottom'}
        >
          <Menu />
        </MenuPortal>
      </Area>
      <Area>
        <MenuButton ref={menuRef2} onClick={toggleMenu2}>Menu</MenuButton>
        <MenuPortal
          targetRef={menuRef2}
          visible={menuOpened2}
          direction={'bottom'}
          align={'left'}
        >
          <Menu />
        </MenuPortal>
        <MenuPortal
          targetRef={menuRef2}
          visible={menuOpened2}
          direction={'right'}
          align={'bottom'}
        >
          <Menu />
        </MenuPortal>
        <MenuPortal
          targetRef={menuRef2}
          visible={menuOpened2}
          direction={'top'}
          align={'right'}
        >
          <Menu />
        </MenuPortal>
        <MenuPortal
          targetRef={menuRef2}
          visible={menuOpened2}
          direction={'left'}
          align={'top'}
        >
          <Menu />
        </MenuPortal>
      </Area>
      <Area>
        <Button>Modal</Button>
      </Area>
      <Area>
        <Button>Notification</Button>
      </Area>
      <Area>
        <Button>Toast</Button>
      </Area>
      <span>Tooltip</span>
    </Layout>
  );
};

export default Portal;
