import { Formik, Form } from "formik";
import * as Yup from "yup";
import jsonForm from "../data/custom-form.json";
import { TextField } from "./text-field";
import { CommonSelect } from "./common-select";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of jsonForm) {
  initialValues[input.name] = input.value;
  let schema = Yup.string();

  if (input.validations) {
    schema = input.validations.reduce((acc: any, rule: any) => {
      if (rule.type === "required") {
        return acc.required("Este campo es requerido");
      }
      if (rule.type === "minLength") {
        return acc.min(
          rule.value || 2,
          `Mínimo de ${rule.value || 2} caracteres`
        );
      }
      if (rule.type === "maxLength") {
        return acc.max(
          rule.value || 2,
          `Máximo de ${rule.value || 2} caracteres`
        );
      }
      if (rule.type === "email") {
        return acc.email("Revise el formato del email");
      }
      return acc;
    }, schema);
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {jsonForm.map(({ type, label, name, placeholder, options }) => {
              if (type === "text" || type === "password" || type === "email") {
                return (
                  <TextField
                    key={name}
                    type={type as any}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              }
              if (type === "select") {
                return (
                  <CommonSelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </CommonSelect>
                );
              }
              throw new Error(`${type} is not supported`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
