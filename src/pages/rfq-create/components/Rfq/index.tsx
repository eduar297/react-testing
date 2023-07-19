import {
  Container,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Form,
} from 'react-bootstrap';

import { TabProps } from '../../types';

const Rfq = ({ formik }: TabProps) => {
  return (
    <Container className="my-3">
      <FormGroup controlId="text1" className="mb-3">
        <FormLabel>Text 1</FormLabel>
        <FormControl
          type="text"
          name="text1"
          value={formik.values.text1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.text1 && Boolean(formik.errors.text1)}
          isValid={formik.touched.text1 && !Boolean(formik.errors.text1)}
        />
        {formik.touched.text1 && formik.errors.text1 && (
          <FormControl.Feedback type="invalid">
            {formik.errors.text1}
          </FormControl.Feedback>
        )}
      </FormGroup>

      <FormGroup controlId="check" className="mb-3">
        <Form.Check
          type="checkbox"
          name="check"
          label="Check me"
          checked={formik.values.check}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>

      {formik.values.check && (
        <FormGroup controlId="text2" className="mb-3">
          <FormLabel>Text 2</FormLabel>
          <FormControl
            type="text"
            name="text2"
            value={formik.values.text2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.text2 && Boolean(formik.errors.text2)}
            isValid={formik.touched.text2 && !Boolean(formik.errors.text2)}
          />
          {formik.touched.text2 && formik.errors.text2 && (
            <FormControl.Feedback type="invalid">
              {formik.errors.text2}
            </FormControl.Feedback>
          )}
        </FormGroup>
      )}
    </Container>
  );
};

export default Rfq;
