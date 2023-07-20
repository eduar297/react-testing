import { RfqTab, CustomerTab } from './components';
import { Container } from './components/UI';
import Accordion, {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from './components/UI/Accordion';

import useRfqForm from './components/Rfq/useRfqForm.hook';
import useCustomerForm from './components/Customer/useCustomerForm.hook';

const RfqCreate: React.FC = () => {
  const { rfqFormik } = useRfqForm();
  const { customerFormik } = useCustomerForm();

  return (
    <Container fluid>
      <Accordion defaultActiveKey="customer" alwaysOpen={false}>
        <AccordionItem eventKey="rfq">
          <AccordionHeader>Rfq</AccordionHeader>
          <AccordionBody>
            <RfqTab formik={rfqFormik} />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="customer">
          <AccordionHeader>Customer</AccordionHeader>
          <AccordionBody>
            <CustomerTab formik={customerFormik} />
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default RfqCreate;
