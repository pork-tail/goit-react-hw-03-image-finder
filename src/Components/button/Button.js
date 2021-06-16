import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={styles.button}>
        <span>loade more</span>
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
