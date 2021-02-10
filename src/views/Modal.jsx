import React from 'react';
import styled from 'styled-components';
import useToggle from 'react-use/esm/useToggle';
import PlainModal from '../components/modal/PlainModal';

const Layout = styled.div`
  > button {
    margin: 0 10px;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 5px;
  }
`;

const Modal = () => {
  const [showModalOne, toggleShowModalOne] = useToggle(false);
  const [showModalTwo, toggleShowModalTwo] = useToggle(false);

  return (
    <Layout className="bg-white text-black flex justify-center items-center">
      <button onClick={toggleShowModalOne} disabled={showModalOne}>Modal1</button>
      <button onClick={toggleShowModalTwo} disabled={showModalTwo}>Modal2</button>
      <>
        {showModalOne && (
          <PlainModal showModal={showModalOne} toggleShowModal={toggleShowModalOne} />
        )}
        {showModalTwo && (
          <PlainModal showModal={showModalTwo} toggleShowModal={toggleShowModalTwo} />
        )}
      </>
    </Layout>
  );
};

export default Modal;
