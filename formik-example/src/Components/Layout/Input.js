import React from 'react';
import styles from '../../Styles/Layout/Input.module.css';

const Input = ({ label, type, name, value, error, onChange, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${styles.input} ${error && styles.inputError}`}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
