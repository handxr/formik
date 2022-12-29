import { useField, ErrorMessage } from "formik";

type TextFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
};

export const TextField = ({
  label,
  name,
  type = "text",
  placeholder,
  ...restOfProps
}: TextFieldProps) => {
  const [field] = useField(name);
  return (
    <>
      <label htmlFor={restOfProps.id || name}>{label}</label>
      <input
        className="text-input"
        type={type}
        placeholder={placeholder}
        {...field}
        {...restOfProps}
      />
      <ErrorMessage name={name} component="span" />
    </>
  );
};
