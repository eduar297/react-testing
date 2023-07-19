import { FormValues } from './types';

import * as yup from 'yup';

export const validationSchema: yup.ObjectSchema<FormValues> = yup
  .object()
  .shape({
    // rfq
    text1: yup
      .string()
      .typeError('Enter a text1')
      .required('text1 is required'),
    check: yup.boolean(),
    text2: yup.string().when('check', {
      is: true,
      then: (schema) =>
        schema.typeError('Enter a text2').required('text2 is required'),
    }),
    // customer
    text3: yup
      .string()
      .typeError('Enter a text3')
      .required('text3 is required'),
    text4: yup.string().when('check', {
      is: true,
      then: (schema) =>
        schema.typeError('Enter a text4').required('text4 is required'),
    }),
  });
