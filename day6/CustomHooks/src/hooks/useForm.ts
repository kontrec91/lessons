import { useCallback,  useState } from "react";
import type { errorsType, initialValuesType } from "../types/types";

const useForm = (
  initialValues: initialValuesType,
  validate: (values: initialValuesType) => { errors: errorsType }
) => {
  const [values, setValues] = useState<initialValuesType>(initialValues);

  const [errors, setIsErrors] = useState<errorsType>({});

  //   const handleChange = useCallback(
  //     (event: React.ChangeEvent<HTMLInputElement>) => {
  //       const { name, value } = event.target;
  //       setValues(prev => ({ ...prev, [name]: value }));
  //     },
  //     []
  //   );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const newValues = { ...values, [name]: value };
      setValues(newValues);

      const { errors } = validate(newValues);
      setIsErrors({ ...errors });
    },
    [validate, values]
  );

  // useEffect(() => {
  //     const { errors } = validate(values);
  //     setIsErrors(errors);
  //   }, [values, validate]);

  const handleSubmit = (
    func: (data: initialValuesType) => void,
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const { errors } = validate(values);
    setIsErrors({ ...errors });

    const isFormValid =
      Object.keys(errors).length === 0 &&
      values.email !== "" &&
      values.password !== "";

    if (isFormValid) {
      func(values);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setIsErrors({});
  };
  return { values, handleChange, handleSubmit, errors, reset };
};

export default useForm;
