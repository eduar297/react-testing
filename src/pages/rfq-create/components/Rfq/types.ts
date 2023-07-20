import { FormikProps } from 'formik';

export interface RfqFormValues {
  text1: string;
  check?: boolean;
  text2?: string;
}

export type RfqInputProps = {
  formik: FormikProps<RfqFormValues>;
};
