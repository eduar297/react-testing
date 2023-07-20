import { FormikProps } from 'formik';

export interface CustomerFormValues {
  name: string;
  domain: string;
  logo: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zip?: number;
  numberOfEmployees?: number;
  founded?: number;
  website: string;
  duns?: number;
  taxId?: number;
  legalBusinessName: string;
  about: string;
}

export type CustomerInputProps = {
  formik: FormikProps<CustomerFormValues>;
};
