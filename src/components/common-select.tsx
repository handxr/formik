import { useField, ErrorMessage } from "formik";

type CommonSelectProps = {
  label: string;
  name: string;
  [x: string]: any;
};

export const CommonSelect = ({
  label,
  name,
  ...restOfProps
}: CommonSelectProps) => {
  const [field, meta] = useField(name);
  return (
    <>
      <label htmlFor={restOfProps.id || name}>{label}</label>
      <select {...field} {...restOfProps} />
      <ErrorMessage name={name} component="span" />
    </>
  );
};
