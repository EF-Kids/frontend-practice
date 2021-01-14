import React from 'react';
import ModalContainer from './Modal';
import styles from './PlainModal.module.less';

const PlainModal = ({ showModal, toggleShowModal }) => (
  <ModalContainer>
    <div className={styles.PlainModal}>
      <div>PlainModal</div>
      <div className={styles.buttons}>
        <div className={styles.leftButtons}>
          <button disabled>Disabled</button>
        </div>
        <div className={styles.rightButtons}>
          <button disabled>Disabled</button>
          <button onClick={toggleShowModal} disabled={!showModal}>Close</button>
        </div>
      </div>
    </div>
  </ModalContainer>
);

export default PlainModal;
