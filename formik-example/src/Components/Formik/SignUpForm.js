import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyInput = ({ label, type, field, ...props }) => {
  const { name } = field;

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...field} {...props} />
      <ErrorMessage component="span" name={name} className="text-center" />
    </>
  );
};

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
        onSubmit={({ firstName, lastName }, { resetForm, setSubmitting }) => {
          setSubmitting(true);

          setTimeout(() => {
            addName({ firstName, lastName });
            setSubmitting(false);
            resetForm(initialValues);
          }, 500);
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="flex">
            <Field
              type="text"
              name="firstName"
              label="First Name"
              className={errors.firstName ? 'input-error' : 'input'}
              component={MyInput}
            />
            <Field
              type="text"
              name="lastName"
              label="Last Name"
              className={errors.lastName ? 'input-error' : 'input'}
              component={MyInput}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-block btn-primary"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
