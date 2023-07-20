import * as yup from 'yup';

import { CustomerFormValues } from './types';

export const customerValidationSchema: yup.ObjectSchema<CustomerFormValues> =
  yup.object().shape({
    name: yup.string().typeError('Enter a name').required('Name is required'),
    domain: yup
      .string()
      .typeError('Enter a domain')
      .required('Domain is required'),
    logo: yup.string().typeError('Enter a logo').required('Logo is required'),
    address: yup
      .string()
      .typeError('Enter a address')
      .required('Address is required'),
    city: yup.string().typeError('Enter a city').required('City is required'),
    country: yup.string().required('Country is required'),
    state: yup
      .string()
      .typeError('Enter a state')
      .required('State is required'),
    zip: yup.number().typeError('Enter a zip').required('Zip is required'),
    numberOfEmployees: yup
      .number()
      .typeError('Enter a number of employees')
      .required('Number of employees is required'),
    founded: yup
      .number()
      .typeError('Enter a founded')
      .required('Founded is required'),
    website: yup
      .string()
      .typeError('Enter a website')
      .required('Website is required'),
    duns: yup.number().typeError('Enter a DUNS'),
    taxID: yup
      .number()
      .typeError('Enter a tax ID')
      .required('Tax ID is required'),
    legalBusinessName: yup
      .string()
      .typeError('Enter a legal business name')
      .required('Legal business name is required'),
    about: yup
      .string()
      .typeError('Enter a about')
      .required('About is required'),
  });
