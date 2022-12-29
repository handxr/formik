import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Yup </h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("First name is required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          terms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(["designer", "development", "product"], "Invalid Job Type")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="span" />
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field type="checkbox" name="terms" /> Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
