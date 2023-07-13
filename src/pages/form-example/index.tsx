import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
    .email('Enter a valid email address')
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
    .required('Gender is required'),
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
      <FormGroup>
        <Label for="email">Email address</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          invalid={formik.touched.email && Boolean(formik.errors.email)}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-danger">{formik.errors.email}</div>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          invalid={formik.touched.password && Boolean(formik.errors.password)}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-danger">{formik.errors.password}</div>
        )}
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formik.values.rememberMe}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Remember me
        </Label>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Gender</legend>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={formik.values.gender === 'male'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={formik.touched.gender && Boolean(formik.errors.gender)}
            />
            Male
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={formik.values.gender === 'female'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={formik.touched.gender && Boolean(formik.errors.gender)}
            />
            Female
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={formik.values.gender === 'other'}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={formik.touched.gender && Boolean(formik.errors.gender)}
            />
            Other
          </Label>
        </FormGroup>
        {formik.touched.gender && formik.errors.gender && (
          <div className="text-danger">{formik.errors.gender}</div>
        )}
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormExample;
