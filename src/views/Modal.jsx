import React from 'react';
import useToggle from 'react-use/esm/useToggle';
import PlainModal from '../components/modal/PlainModal';
import styles from './Modal.module.less';

const Modal = () => {
  const [showModalOne, toggleShowModalOne] = useToggle(false);
  const [showModalTwo, toggleShowModalTwo] = useToggle(false);

  return (
    <div className={styles.Modal}>
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
    </div>
  );
};

export default Modal;
