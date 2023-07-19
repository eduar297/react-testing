import { useFormik } from 'formik';

import { CustomerFormValues, FormValues, RfqFormValues } from './types';
import { validationSchema } from './schema';

// rfq initial values
const rfqInitialValues: RfqFormValues = {
  text1: '',
  check: false,
  text2: '',
};

// customer initial values
const customerInitialValues: CustomerFormValues = {
  text3: '',
  text4: '',
};

export const initialValues = {
  ...rfqInitialValues,
  ...customerInitialValues,
};

const onSubmit = (values: FormValues) => {
  alert(JSON.stringify(values, null, 2));
};

export const useRfqForm = () => {
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return { formik };
};
