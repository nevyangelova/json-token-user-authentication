import React from "react";
import { withFormik } from "formik";
import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 500px;
  margin: auto;
  color: #fefefe;

  input {
    padding: 0.5rem;
    margin: 1rem 0;
    font-size: 16px;
    width: 100%;
    display: block;
    border-radius: 4px;
    border: 3px solid #639;
  }

  input:focus {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
  }

  input.error {
    border-color: #882c2c;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  .input-feedback {
    color: #882c2c;
    font-weight: bold;
  }

  button {
    max-width: 150px;
    margin: 20px 0;
    padding: 12px 20px;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #009688;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    font-size: 17px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  button + button {
    margin-left: 0.5rem;
  }

  button.outline {
    background-color: #eee;
    border: 1px solid #aaa;
    color: #555;
  }
`;

const AccountForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty
  } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="firstName" style={{ display: "block" }}>
        First Name
      </label>
      <input
        id="firstName"
        placeholder="First name"
        type="text"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.firstName && touched.firstName
            ? "text-input error"
            : "text-input"
        }
      />
      {errors.firstName && touched.firstName && (
        <div className="input-feedback">{errors.firstName}</div>
      )}

      <label htmlFor="lastName" style={{ display: "block" }}>
        Last Name
      </label>
      <input
        id="lastName"
        placeholder="Last name"
        type="text"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.lastName && touched.lastName
            ? "text-input error"
            : "text-input"
        }
      />
      {errors.lastName && touched.lastName && (
        <div className="input-feedback">{errors.lastName}</div>
      )}

      <label htmlFor="email" style={{ display: "block" }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? "text-input error" : "text-input"
        }
      />
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}

      <label htmlFor="password" style={{ display: "block" }}>
        Password
      </label>
      <input
        id="password"
        placeholder="Password"
        type="text"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.password && touched.password
            ? "text-input error"
            : "text-input"
        }
      />
      {errors.password && touched.password && (
        <div className="input-feedback">{errors.password}</div>
      )}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </StyledForm>
  );
};

export const EnhancedAccountForm = withFormik({
  mapPropsToValues: () => ({ email: "" }),

  // Custom sync validation
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "AccountForm" // helps with React DevTools
})(AccountForm);
