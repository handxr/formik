import { useFormik } from "formik";
import * as Yup from "yup";

export const FormikUseFormik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Formik Yup </h1>
      <form noValidate onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...formik.getFieldProps("firstName")} />
        {formik.touched.firstName && formik.errors.firstName && (
          <span>{formik.errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...formik.getFieldProps("lastName")} />
        {formik.touched.lastName && formik.errors.lastName && (
          <span>{formik.errors.lastName}</span>
        )}
        <label htmlFor="email">Email Address</label>
        <input type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email && (
          <span>{formik.errors.email}</span>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
