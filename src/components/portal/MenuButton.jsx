import styled from 'styled-components';

const MenuButton = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fff;
  color: #000;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover{
    background-color: #e9e9e9;
  }
`;

export default MenuButton;
