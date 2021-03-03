import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm = ({ addName }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Must be 10 characters or less')
      .required('First Name is Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'TMust be 10 characters or less')
      .required('Last Name is Required'),
  });

  return (
    <div className="form-container bg-light">
      <h2>Formik</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={({ firstName, lastName }, { resetForm }) => {
          addName({ firstName, lastName });
          resetForm(initialValues);
        }}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit} className="flex">
            <label htmlFor="firstName" className="text-left">
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.firstName ? 'input-error' : 'input'}
            />
            <ErrorMessage
              component="span"
              name="firstName"
              className="text-center"
            />

            <label htmlFor="lastName" className="text-left">
              Last Name
            </label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.lastName ? 'input-error' : 'input'}
            />
            <ErrorMessage
              component="span"
              name="lastName"
              className="text-center"
            />

            <button type="submit" className="btn btn-block btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
