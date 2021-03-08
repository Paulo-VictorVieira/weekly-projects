import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UseFormikForm = ({ addName }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const validateSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Must be 10 characters or less')
      .required('First Name is Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'TMust be 10 characters or less')
      .required('Last Name is Required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validateSchema,
    onSubmit: ({ firstName, lastName }, { resetForm, setSubmitting }) => {
      setSubmitting(true);

      setTimeout(() => {
        addName({ firstName, lastName });
        setSubmitting(false);
        resetForm();
      }, 500);
    },
  });

  return (
    <div className="form-container bg-light">
      <h2>useFormik</h2>

      <form onSubmit={formik.handleSubmit} className="flex">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className={formik.errors.firstName ? 'input-error' : 'input'}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <span className="text-center">{formik.errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className={formik.errors.lastName ? 'input-error' : 'input'}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <span className="text-center">{formik.errors.lastName}</span>
        )}
        <button
          type="submit"
          className="btn btn-block btn-primary"
          disabled={formik.isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

UseFormikForm.propTypes = {
  addName: PropTypes.func.isRequired,
};

export default UseFormikForm;
