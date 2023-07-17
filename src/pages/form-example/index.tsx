import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';

interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
  gender: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .typeError('Enter an email address')
    .email('Please enter a valid email address')
    .required('Email address is required'),
  password: yup
    .string()
    .typeError('Enter a password')
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  rememberMe: yup.boolean(),
  gender: yup
    .string()
    .oneOf(['male', 'female', 'other'])
    .required('Gender is mandatory'),
});

const FormExample: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      gender: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup controlId="email">
        <FormLabel>Email address</FormLabel>
        <FormControl
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.email && Boolean(formik.errors.email)}
          isValid={formik.touched.email && !Boolean(formik.errors.email)}
        />
        {formik.touched.email && formik.errors.email && (
          <FormControl.Feedback type="invalid">
            {formik.errors.email}
          </FormControl.Feedback>
        )}
      </FormGroup>
      <FormGroup controlId="password">
        <FormLabel>Password</FormLabel>
        <FormControl
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.password && Boolean(formik.errors.password)}
          isValid={formik.touched.password && !Boolean(formik.errors.password)}
        />
        {formik.touched.password && formik.errors.password && (
          <FormControl.Feedback type="invalid">
            {formik.errors.password}
          </FormControl.Feedback>
        )}
      </FormGroup>
      <FormGroup controlId="rememberMe">
        <FormCheck
          type="checkbox"
          name="rememberMe"
          label="Remember me"
          checked={formik.values.rememberMe}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Gender</FormLabel>
        <FormCheck
          type="radio"
          id="male"
          name="gender"
          value="male"
          label="Male"
          checked={formik.values.gender === 'male'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.gender && Boolean(formik.errors.gender)}
        />
        <FormCheck
          type="radio"
          id="female"
          name="gender"
          value="female"
          label="Female"
          checked={formik.values.gender === 'female'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.gender && Boolean(formik.errors.gender)}
        />
        <FormCheck
          type="radio"
          id="other"
          name="gender"
          value="other"
          label="Other"
          checked={formik.values.gender === 'other'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.gender && Boolean(formik.errors.gender)}
        />
        {formik.touched.gender && formik.errors.gender && (
          <FormControl.Feedback type="invalid">
            {formik.errors.gender}
          </FormControl.Feedback>
        )}
      </FormGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormExample;
