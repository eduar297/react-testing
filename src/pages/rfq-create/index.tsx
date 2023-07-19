import { Container, Form, Tab, Tabs } from 'react-bootstrap';

import { RfqTab, CustomerTab } from './components';

import { useRfqForm } from './useRfqForm.hook';

const RfqCreate: React.FC = () => {
  const { formik } = useRfqForm();

  return (
    <Container fluid>
      <Form onSubmit={formik.handleSubmit} id="rfq-form">
        <Tabs defaultActiveKey="rfq" id="rdq-tabs" variant="tabs">
          <Tab eventKey="rfq" title="Rfq">
            <RfqTab formik={formik} />
          </Tab>
          <Tab eventKey="customer" title="Customer">
            <CustomerTab formik={formik} />
          </Tab>
        </Tabs>
      </Form>
    </Container>
  );
};

export default RfqCreate;
