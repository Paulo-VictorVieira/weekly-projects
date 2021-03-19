import React from 'react';
import Input from '../Layout/Input';
import useForm from '../../Hooks/useForm';

const NamesForm = ({ addName }) => {
  const firstName = useForm();
  const lastName = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.validate() && lastName.validate()) {
      addName({ firstName: firstName.value, lastName: lastName.value });
      firstName.setValue('');
      lastName.setValue('');
    }
  };

  return (
    <div className="form-container bg-light">
      <h2>Form</h2>
      <form className="flex" onSubmit={handleSubmit}>
        <Input label="First Name" type="text" name="firstname" {...firstName} />
        <Input label="Last Name" type="text" name="lastName" {...lastName} />

        <button type="submit" className="btn btn-block btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NamesForm;
