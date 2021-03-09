import React from 'react';
import MaskedInput from './MaskedInput';

const MaskedForm = () => {
  const initialValues = {
    cpf: '',
    cnpj: '',
  };

  const [values, setValues] = React.useState(initialValues);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const clearNumber = onlyNumbers(value);

    setValues({ ...values, [name]: clearNumber });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setValues(initialValues);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="form-container bg-light animeLeft">
      <form className=" flex" onSubmit={handleSubmit}>
        <h2>Masked</h2>
        <MaskedInput
          name="cpf"
          label="CPF"
          mask="999.999.999-99"
          value={values.cpf}
          className="input"
          onChange={handleChange}
        />

        <MaskedInput
          name="cnpj"
          label="CNPJ"
          mask="99.999.999/9999-99"
          value={values.cnpj}
          className="input"
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-block btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MaskedForm;
