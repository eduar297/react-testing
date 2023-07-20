import * as yup from 'yup';

import { RfqFormValues } from './types';

export const rfqValidationSchema: yup.ObjectSchema<RfqFormValues> = yup
  .object()
  .shape({
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
  });
