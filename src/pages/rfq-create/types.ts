import { FormikProps } from 'formik';

export interface RfqFormValues {
  text1: string;
  check?: boolean;
  text2?: string;
}

export interface CustomerFormValues {
  text3: string;
  text4?: string;
}

export type FormValues = RfqFormValues & CustomerFormValues;

export type TabProps = {
  formik: FormikProps<FormValues>;
};
