import React from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ modalImage, closeModal }) => {
  return (
    <div onClick={closeModal} className={styles.overlay}>
      <div className={styles.modal}>
        <img src={modalImage} alt="img" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
