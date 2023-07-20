import { useFormik } from 'formik';

import { RfqFormValues } from './types';
import { rfqValidationSchema } from './schema';

// Initial values
const rfqInitialValues: RfqFormValues = {
  text1: '',
  check: false,
  text2: '',
};

// Submit
const onSubmit = (values: RfqFormValues) => {
  alert(JSON.stringify(values, null, 2));
};

// Rfq hook
const useRfqForm = () => {
  const rfqFormik = useFormik<RfqFormValues>({
    initialValues: rfqInitialValues,
    validationSchema: rfqValidationSchema,
    onSubmit,
  });

  return { rfqFormik };
};

export default useRfqForm;
