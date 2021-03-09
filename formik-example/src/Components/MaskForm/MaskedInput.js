import React from 'react';
import InputMask from 'react-input-mask';

const MaskedInput = ({ label, name, value, onChange, mask, ...props }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <InputMask
        id={name}
        name={name}
        value={value}
        mask={mask}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default MaskedInput;
