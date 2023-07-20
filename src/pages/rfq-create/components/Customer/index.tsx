import { useState } from 'react';

import { CustomerFormValues, CustomerInputProps } from './types';
import { useCountries, useStates, useCustomers } from '../../hooks';

import { Modal, Button, Container, Row, Col } from '../UI';
import Form, { Text, Select, TextArea, FileUpload } from '../UI/Form';
import Card, { CardBody, CardFooter, CardHeader } from '../UI/Card';

const Customer = ({ formik }: CustomerInputProps) => {
  const {
    countries,
    loading: loadingCountries,
    error: errorCountries,
  } = useCountries();
  const {
    states,
    loading: loadingStates,
    error: errorStates,
  } = useStates(formik.values.country);
  const {
    customers,
    loading: loadingCustomers,
    error: errorCustomers,
  } = useCustomers();

  const [customerSelected, setCustomerSelected] =
    useState<CustomerFormValues>();

  const [showCreateCustomerModal, setShowCreateCustomerModal] = useState(false);

  const handleCreateCustomerModalClose = () =>
    setShowCreateCustomerModal(false);
  const handleCreateCustomerModalShow = () => setShowCreateCustomerModal(true);

  return (
    <Container fluid>
      <Modal
        show={showCreateCustomerModal}
        title="Create new customer"
        handleClose={handleCreateCustomerModalClose}
        body={
          <div style={{ overflowY: 'auto', maxHeight: '30rem' }}>
            <Form onSubmit={formik.handleSubmit} id="customer-frm">
              <Container>
                <Row>
                  <Col sm={4} className="my-1">
                    <Text
                      controlId="name"
                      name="name"
                      label="Customer Name"
                      inputGroupText="@"
                      value={formik.values.name}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.name}
                      error={formik.errors.name}
                      placeholder="Name"
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <FileUpload
                      controlId="logo"
                      name="logo"
                      label="Logo"
                      value={formik.values.logo}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.logo}
                      error={formik.errors.logo}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={4} className="my-1">
                    <Text
                      controlId="domain"
                      name="domain"
                      label="Domain"
                      value={formik.values.domain}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.domain}
                      error={formik.errors.domain}
                      placeholder="Domain"
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <Text
                      controlId="address"
                      name="address"
                      label="Address"
                      value={formik.values.address}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.address}
                      error={formik.errors.address}
                      placeholder="Address"
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <Text
                      controlId="city"
                      name="city"
                      label="City"
                      value={formik.values.city}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.city}
                      error={formik.errors.city}
                      placeholder="City"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={4} className="my-1">
                    <Select
                      name="country"
                      value={formik.values.country}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.country}
                      error={formik.errors.country}
                      label="Country"
                      placeholder="Select a country"
                      controlId="country"
                      loading={loadingCountries}
                      fetchError={errorCountries}
                      options={countries.map((country) => ({
                        value: country.code,
                        label: country.name,
                      }))}
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <Select
                      enabled={Boolean(formik.values.country)}
                      name="state"
                      value={formik.values.state}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.state}
                      error={formik.errors.state}
                      label="State"
                      placeholder="Select a state"
                      controlId="state"
                      loading={loadingStates}
                      fetchError={errorStates}
                      options={states.map((state) => ({
                        value: state.code,
                        label: state.name,
                      }))}
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <Text
                      type="number"
                      controlId="zip"
                      name="zip"
                      label="Postal Code"
                      value={formik.values.zip}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.zip}
                      error={formik.errors.zip}
                      placeholder="Postal"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={4} className="my-1">
                    <Text
                      type="number"
                      controlId="numberOfEmployees"
                      name="numberOfEmployees"
                      label="Number of Employees"
                      value={formik.values.numberOfEmployees}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.numberOfEmployees}
                      error={formik.errors.numberOfEmployees}
                      placeholder="Number of Employees"
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <Text
                      type="number"
                      controlId="founded"
                      name="founded"
                      label="Founded"
                      value={formik.values.founded}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.founded}
                      error={formik.errors.founded}
                      placeholder="Founding Year"
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <Text
                      controlId="website"
                      name="website"
                      label="Website"
                      value={formik.values.website}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.website}
                      error={formik.errors.website}
                      placeholder="Website Link"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={4} className="my-1">
                    <Text
                      type="number"
                      controlId="duns"
                      name="duns"
                      label="DUNS"
                      value={formik.values.duns}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.duns}
                      error={formik.errors.duns}
                      placeholder="DUNS"
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <Text
                      type="number"
                      controlId="taxId"
                      name="taxId"
                      label="Tax Id"
                      value={formik.values.taxId}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.taxId}
                      error={formik.errors.taxId}
                      placeholder="Tax Id"
                    />
                  </Col>

                  <Col sm={4} className="my-1">
                    <Text
                      controlId="website"
                      name="legalBusinessName"
                      label="Legal Business Name"
                      value={formik.values.legalBusinessName}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.legalBusinessName}
                      error={formik.errors.legalBusinessName}
                      placeholder="Legal Business Name"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} className="my-1">
                    <TextArea
                      controlId="about"
                      name="about"
                      label="About"
                      value={formik.values.about}
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      touched={formik.touched.about}
                      error={formik.errors.about}
                    />
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        }
        footer={
          <>
            <Button
              variant="primary"
              type="submit"
              disabled={!formik.dirty || !formik.isValid}
            >
              Save
            </Button>
            <Button variant="danger" onClick={handleCreateCustomerModalClose}>
              Cancel
            </Button>
          </>
        }
      />

      <Card>
        <Form id="customer-frm-readOnly">
          <CardHeader>Customer Info</CardHeader>
          <CardBody>
            <Row>
              <Col sm={6} className="my-1">
                <Select
                  name="customer"
                  value={customerSelected?.name}
                  handleChange={(e) =>
                    setCustomerSelected(
                      customers.find(
                        (customer) => customer.name === e.target.value,
                      ),
                    )
                  }
                  placeholder="Select a customer"
                  inputGroupText="Select an existing customer"
                  controlId="customer"
                  loading={loadingCustomers}
                  fetchError={errorCustomers}
                  options={customers.map((customer) => ({
                    value: customer.name,
                    label: customer.name,
                  }))}
                />
              </Col>

              <Col sm={6} className="my-1">
                <Button
                  variant="primary"
                  type="button"
                  onClick={handleCreateCustomerModalShow}
                >
                  Create New Customer
                </Button>
              </Col>
            </Row>

            <Row>
              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  label="Customer Name"
                  inputGroupText="@"
                  value={customerSelected?.name}
                />
              </Col>

              <Col sm={4} className="my-1">
                <p>Logo</p>
              </Col>
            </Row>

            <Row>
              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  label="Domain"
                  value={customerSelected?.domain}
                />
              </Col>

              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  label="Address"
                  value={customerSelected?.address}
                />
              </Col>

              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  label="City"
                  value={customerSelected?.city}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={4} className="my-1">
                <Select
                  enabled={false}
                  value={customerSelected?.country}
                  label="Country"
                  placeholder="Select a country"
                  options={countries.map((country) => ({
                    value: country.code,
                    label: country.name,
                  }))}
                />
              </Col>

              <Col sm={4} className="my-1">
                <Select
                  enabled={false}
                  value={customerSelected?.state}
                  label="State"
                  placeholder="Select a state"
                  options={states.map((state) => ({
                    value: state.code,
                    label: state.name,
                  }))}
                />
              </Col>

              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  type="number"
                  label="Postal Code"
                  value={customerSelected?.zip}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  type="number"
                  label="Number of Employees"
                  value={customerSelected?.numberOfEmployees}
                />
              </Col>

              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  type="number"
                  label="Founded"
                  value={customerSelected?.founded}
                />
              </Col>

              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  label="Website"
                  value={customerSelected?.website}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  type="number"
                  label="DUNS"
                  value={customerSelected?.duns}
                />
              </Col>

              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  type="number"
                  label="Tax Id"
                  value={customerSelected?.taxId}
                />
              </Col>

              <Col sm={4} className="my-1">
                <Text
                  enabled={false}
                  label="Legal Business Name"
                  value={customerSelected?.legalBusinessName}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={12} className="my-1">
                <TextArea
                  enabled={false}
                  label="About"
                  value={customerSelected?.about}
                />
              </Col>
            </Row>
          </CardBody>

          <CardFooter className="text-muted">
            <Row>
              <Col xs="auto" className="my-1">
                <p>Footer</p>
              </Col>
            </Row>
          </CardFooter>
        </Form>
      </Card>
    </Container>
  );
};

export default Customer;
