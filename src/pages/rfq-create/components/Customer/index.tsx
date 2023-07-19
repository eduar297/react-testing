import {
  Container,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';

import { TabProps } from '../../types';

const Customer = ({ formik }: TabProps) => {
  return (
    <Container className="my-3">
      <FormGroup controlId="text3" className="mb-3">
        <FormLabel>Text 3</FormLabel>
        <FormControl
          type="text"
          name="text3"
          value={formik.values.text3}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.text3 && Boolean(formik.errors.text3)}
          isValid={formik.touched.text3 && !Boolean(formik.errors.text3)}
        />
        {formik.touched.text3 && formik.errors.text3 && (
          <FormControl.Feedback type="invalid">
            {formik.errors.text3}
          </FormControl.Feedback>
        )}
      </FormGroup>

      {formik.values.check && (
        <FormGroup controlId="text4" className="mb-3">
          <FormLabel>Text 4</FormLabel>
          <FormControl
            type="text"
            name="text4"
            value={formik.values.text4}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.text4 && Boolean(formik.errors.text4)}
            isValid={formik.touched.text4 && !Boolean(formik.errors.text4)}
          />
          {formik.touched.text4 && formik.errors.text4 && (
            <FormControl.Feedback type="invalid">
              {formik.errors.text4}
            </FormControl.Feedback>
          )}
        </FormGroup>
      )}
      <Button
        variant="primary"
        type="submit"
        disabled={!formik.dirty || !formik.isValid}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Customer;
