import { useFormik } from 'formik';

import { CustomerFormValues } from './types';
import { customerValidationSchema } from './schema';

// Initial values
const customerInitialValues: CustomerFormValues = {
  name: '',
  domain: '',
  logo: '',
  address: '',
  city: '',
  country: '',
  state: '',
  zip: undefined,
  numberOfEmployees: undefined,
  founded: undefined,
  website: '',
  duns: undefined,
  taxId: undefined,
  legalBusinessName: '',
  about: '',
};

// Submit
const onSubmit = (values: CustomerFormValues) => {
  alert(JSON.stringify(values, null, 2));
};

// Customer hook
const useCustomerForm = () => {
  const customerFormik = useFormik<CustomerFormValues>({
    initialValues: customerInitialValues,
    validationSchema: customerValidationSchema,
    onSubmit,
  });

  return { customerFormik };
};

export default useCustomerForm;
