import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./text-field";

export const FormikRegister = () => {
  return (
    <div>
      <h1>Formik Register</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password1: Yup.string().required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1"), null], "Passwords must match")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            <TextField label="Name" name="name" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password1" type="password" />
            <TextField
              label="Confirm Password"
              name="password2"
              type="password"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => formik.resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
