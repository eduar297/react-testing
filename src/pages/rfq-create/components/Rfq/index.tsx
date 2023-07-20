import {
  Container,
  FormControl,
  FormGroup,
  FormLabel,
  Form,
  Button,
} from 'react-bootstrap';

import { RfqInputProps } from './types';
import { CheckBox } from '../UI/Form';
import Checkbox from '../UI/Form/CheckBox';

const Rfq = ({ formik }: RfqInputProps) => {
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit} id="rfq-form">
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

        <Checkbox
          value={formik.values.check}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={formik.touched.check}
          error={formik.errors.check}
          name="check"
          label="Check me"
          controlId="check"
        />

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

        <Button
          variant="primary"
          type="submit"
          disabled={!formik.dirty || !formik.isValid}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Rfq;
