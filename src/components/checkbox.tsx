import { useField, ErrorMessage } from "formik";

type CheckboxProps = {
  label?: string;
  name: string;
  [x: string]: any;
};

export const Checkbox = ({
  label,
  name,

  ...restOfProps
}: CheckboxProps) => {
  const [field] = useField({ name, type: "checkbox" });
  return (
    <>
      <label>
        {" "}
        <input type="checkbox" {...field} {...restOfProps} />
        {label}
      </label>
      <ErrorMessage name={name} component="span" />
    </>
  );
};
