import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Validations() {
  return (
    <div>
      <h1>React form validation with formik and styled components</h1>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
        }}
        validationSchema={Yup.object().shape({
          fullname: Yup.string()
            .min(2, "Your name is too short")
            .required("Please enter your full name"),
          email: Yup.string()
            .email("The email is incorrect")
            .required("Please enter your email"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const timeOut = setTimeout(() => {
            console.log(values);
            setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          validating,
          valid,
        }) => {
          return (
            <Form name="contact" method="post" onSubmit={handleSubmit}>
              <label htmlFor="fullname">
                Fullname
                <Field
                  type="text"
                  name="fullname"
                  autoComplete="name"
                  placeholder="your fullname"
                />
              </label>
              {errors.fullname && touched.fullname && <p>{errors.fullname}</p>}
              <label htmlFor="email">
                Email
                <Field
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="your email"
                />
              </label>
              <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>
              <button type="submit" avilable={!valid || isSubmitting}>
                {isSubmitting ? `Submiting...` : `Submit`}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Validations;