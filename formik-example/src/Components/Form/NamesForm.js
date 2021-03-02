import React from 'react';

const NamesForm = ({ addName }) => {
  const [names, setNames] = React.useState({
    firstName: '',
    lastName: '',
  });
  const [error, setError] = React.useState(null);

  const { firstName, lastName } = names;

  const validateName = (value) => {
    if (value.length === 0) {
      setError('Required');
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (error) validateName(value);
    setNames({ ...names, [name]: value });
  };

  const handleBlur = ({ target }) => {
    validateName(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateName(firstName, lastName)) {
      addName(names);
      setNames({
        firstName: '',
        lastName: '',
      });
    } else {
      console.log('Não enviou');
    }
  };

  return (
    <div className="form-container bg-light">
      <h2>Form</h2>
      <form className="flex" onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="text-left">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error ? 'input-error' : 'input'}
        />
        {error && <span className="text-center">First Name is {error} !</span>}
        <label htmlFor="lastName" className="text-left">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error ? 'input-error' : 'input'}
        />
        {error && <span className="text-center">Last Name is {error} !</span>}
        <button type="submit" className="btn btn-block btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NamesForm;
