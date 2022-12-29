import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Checkbox } from "./checkbox";
import { CommonSelect } from "./common-select";
import { TextField } from "./text-field";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction </h1>
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
            <TextField
              label="First Name"
              name="firstName"
              placeholder="Your name"
            />
            <TextField label="Last Name" name="lastName" />
            <TextField label="Email" name="email" type="email" />
            <CommonSelect label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
            </CommonSelect>

            <Checkbox label="I accept the terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
