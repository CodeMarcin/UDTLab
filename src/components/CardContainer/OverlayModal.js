import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './css/OverlayModal.module.css';

const OverlayModal = ({
  text,
  onConfirmHandler,
  onConfirmArg,
  onNotConfirmHandler,
  onNotConfirmArg,
}) => {
  const [isModalVissible, setIsModalVissible] = useState(true);
  const notConfrimHandler = () => {
    setIsModalVissible(false);
    onNotConfirmHandler(onNotConfirmArg);
  };

  const confirmHandler = () => {
    setIsModalVissible(false);
    onConfirmHandler(onConfirmArg);
  };

  return (
    isModalVissible &&
    ReactDOM.createPortal(
      <div className={styles['overlayModalWrapper']}>
        <div className={styles['overlayModal']}>
          <div className={styles['title']}>
            Jesteś pewien/pewna?
            <img
              onClick={notConfrimHandler}
              src="https://cdn-icons.flaticon.com/png/512/3416/premium/3416079.png?token=exp=1645644611~hmac=ed3369a9d5e63fe8400ca07107a70e6c"
            />
          </div>
          <h3>{text}</h3>
          <div className={styles['actionsButton']}>
            <button className="btn btn-two" onClick={confirmHandler}>
              Tak
            </button>
            <button className="btn btn-two" onClick={notConfrimHandler}>
              Nie
            </button>
          </div>
        </div>
      </div>,
      document.getElementById('portal')
    )
  );
};

export default OverlayModal;
