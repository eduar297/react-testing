import { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  Form,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import SimpleMDEReact, { SimpleMDEReactProps } from 'react-simplemde-editor';
//import { useToggle } from '../../../hooks';

import ButtonWithLoader from '../common/ButttonWithLoader';
import config from '../../../config';

import CommonDataGrid from '../common/CommonDataGrid/CommonDataGrid';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import logo from '../../../../../Assets/images/no_image.gif';
import Image from 'react-bootstrap/Image';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Modal from 'react-bootstrap/Modal';

const RfqCreate = () => {
  const animatedComponent = makeAnimated();
  const [selectedContracts, setSelectedContracts] = useState();
  const [Contracts, setContracts] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedExistCustomers, setSelectedExistCustomers] = useState();
  const [ExistCustomers, setExistCustomers] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedUtilities, setSelectedUtilities] = useState();
  const [Utilities, setUtilities] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedCountries, setSelectedCountries] = useState();
  const [Countries, setCountries] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedStates, setSelectedStates] = useState();
  const [States, setStates] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedDirections, setSelectedDirections] = useState();
  const [Directions, setDirections] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedTypes, setSelectTypes] = useState();
  const [Types, setTypes] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedAccess, setSelectedAccess] = useState();
  const [Access, setAccess] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedCommodities, setSelectedCommodities] = useState();
  const [Commodities, setCommodities] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedProcurementUnits, setSelectedProcurementUnits] = useState();
  const [ProcurementUnits, setProcurementUnits] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedProductTypes, setSelectedProductTypes] = useState();
  const [ProductTypes, setProductTypes] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedBillTypes, setSelectedBillTypes] = useState();
  const [BillTypes, setBillTypes] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedUsers, setSelectedUsers] = useState();
  const [Users, setUsers] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedRoles, setSelectedRoles] = useState();
  const [Roles, setRoles] = useState([
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
  ]);

  const [selectedCountriesContracts, setSelectedCountriesContracts] =
    useState();
  const [selectedCountriesCreate, setSelectedCountriesCreate] = useState();
  const [selectedStatesContracts, setSelectedStatesContracts] = useState();
  const [selectedStatesCreate, setSelectedStatesCreate] = useState();
  const [selectedStatesMeterCreate, setSelectedStatesMeterCreate] = useState();
  const [selectedUtilitiesMeterCreate, setSelectedUtilitiesMeterCreate] =
    useState();

  const [showNewCustomer, setShowNewCustomer] = useState(false);
  const closeNewCustomer = () => setShowNewCustomer(false);
  const createNewCustomer = () => setShowNewCustomer(true);

  const [showNewMeter, setShowNewMeter] = useState(false);
  const closeNewMeter = () => setShowNewMeter(false);
  const createNewMeter = () => setShowNewMeter(true);

  const [showLoader, setShowLoader] = useState(false);

  const addUser = () => {
    alert('add user');
  };

  const getCountries = async () => {
    let endpoint = window.location.origin + '/api/countries/select';
    fetch(endpoint, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
    })
      .then((response) => response.text())
      .then((responseText) => {
        var result = JSON.parse(responseText);
        //console.log(result);

        if (result && result.data) {
          setCountries(result.data);
          getStates(result.data[0].id);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    //UIHelper.shownotification(5000, 'info', 'Error', 'Something went wrong! Please try again.');
    const form = event.currentTarget;

    for (var i = 0; i < form.elements.length; i++) {
      if (form.elements[i]['type'] == 'checkbox') {
        console.log(form.elements[i]['name']);
        console.log(form.elements[i]['checked']);
      } else if (form.elements[i]['type '] == 'radio') {
        if (form.elements[i]['checked']) {
          console.log(form.elements[i]['name']);
          console.log(form.elements[i]['value']);
        }
      } else {
        console.log(form.elements[i]['name']);
        console.log(form.elements[i]['value']);
      }
    }

    //   config.MaxLogoFileSizeInKB;
    //   if (form.checkValidity() === true) {
    //     setShowLoader(true);
    //     let obj = {};

    //      var requestObj={
    //       IsValid:true,
    //       ErrorMessage:""
    //      }

    //     const data = Array.from(form.elements).forEach(async (_element) => {
    //       var element=(_element as HTMLInputElement);
    //       if (element.name === "Logo") {

    //         var file = element.files[0]
    //         if (file) {
    //           if ((file.size) / 1024 < config.MaxLogoFileSizeInKB) {
    //             requestObj.IsValid=false;
    //             requestObj.ErrorMessage="Max File size Should be 20 MB";
    //              return false;
    //           }
    //           var rtest = await toBase64(file);
    //           var logo =
    //           {
    //             FileName: file.name,
    //             FileType: file.type,
    //             DocumentTypeName: "Other",
    //             TypeName: "Other",
    //             Timestamp: file.lastModified
    //           }
    //           Object.assign(obj, { [element.name]: logo });
    //         }

    //       }
    //       else {
    //         if (element.name) {
    //           Object.assign(obj, { [element.name]: element.value });
    //         }
    //       }

    //     });
    //if(requestObj.IsValid){
    // await CustomerService.createCustomers(obj);
    //     setShowLoader(false);
    //     navigate("/customer/list");
    //}
    //   else{
    //     setShowLoader(false);
    //   }

    //   }

    //   setValidated();
  };

  const saveDraft = () => {
    alert('Save as Draft');
  };

  const savePublish = () => {
    alert('Save and Publish');
  };

  const options = {
    hideExportExcel: true,
  };

  const columnsAccountsExistinMeter = [
    { name: 'Utility', index: 'Utility', isFilter: false, type: 'dropdown' },
    {
      name: 'Account Number',
      index: 'AccountNumber',
      isFilter: false,
      type: 'text',
    },
    {
      name: 'Meter Number',
      index: 'MeterNumber',
      isFilter: false,
      type: 'text',
    },
    { name: 'Address', index: 'Address', isFilter: false, type: 'text' },
    {
      name: 'Is Dropped',
      index: 'IsDropped',
      isFilter: false,
      type: 'checkbox',
    },
  ];
  const urlAccountsExistinMeter = 'cmaccounts/getaccounts';

  const columnsUserPermissions = [
    { name: 'Full Name', index: 'FullName', isFilter: false, type: 'text' },
    { name: 'Email', index: 'Email', isFilter: false, type: 'text' },
    {
      name: 'User Permission',
      index: 'UserPermission',
      isFilter: false,
      type: 'text',
    },
    {
      name: 'Actions',
      index: '',
      isFilter: false,
      type: 'options',
      sorting: false,
      optionsList: [
        {
          url: window.location.origin + '/api/cmcontracts/getcontracts',
          type: 'confirm',
          navigate: false,
          id: '202-7',
          icon: 'mdi-close',
          class: 'btn-danger',
          text: '',
        },
      ],
    },
  ];
  const urlUserPermissions = 'cmaccounts/getaccounts';

  const getStates = async (countryId) => {
    let endpoint = window.location.origin + '/api/States/select';
    fetch(endpoint, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: 'countryId=' + countryId,
    })
      .then((response) => response.text())
      .then((responseText) => {
        var result = JSON.parse(responseText);
        //console.log(result);

        if (result && result.data) {
          setStates(result.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCountries(); // run it, run it
  }, []);

  return (
    <>
      <Modal show={showNewCustomer} onHide={closeNewCustomer}>
        <Modal.Header closeButton>
          <Modal.Title>Create new customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Name"
                name="CustomerNameCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Domain</Form.Label>
              <Form.Control
                type="text"
                placeholder="Domain"
                name="DomainCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="AddressCreate"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" name="CityCreate" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Country</Form.Label>
              <Select
                components={animatedComponent}
                onChange={(items) => setSelectedCountriesCreate(items)}
                options={Countries}
                value={selectedCountriesCreate}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>State</Form.Label>
              <Select
                components={animatedComponent}
                onChange={(items) => setSelectedStatesCreate(items)}
                options={States}
                value={selectedStatesCreate}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Postal Code"
                name="PostalCodeCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Number of Employees</Form.Label>
              <Form.Control
                type="text"
                placeholder="Number of Employees"
                name="NumberEmployeesCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Founded</Form.Label>
              <Form.Control
                type="text"
                placeholder="Founded"
                name="FoundedCreate"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Website"
                name="WebsiteCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Duns</Form.Label>
              <Form.Control type="text" placeholder="Duns" name="DunsCreate" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Tax Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tax Id"
                name="TaxIdCreate"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Legal Business Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Legal Business Name"
                name="LegalBusinessNameCreate"
              />
            </Form.Group>
            <Form.Group
              controlId="formFile"
              className="mb-3 col-md-4 col-sm-12"
            >
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" name="Logo" />
              <label className="alert-validation float-end">
                Max file size 20mb
              </label>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-12">
              <Form.Label>About</Form.Label>
              <Form.Control name="AboutCreate" as="textarea" rows={5} />
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeNewCustomer}>
            Cancel
          </Button>
          <Button variant="primary" onClick={closeNewCustomer}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNewMeter} onHide={closeNewMeter}>
        <Modal.Header closeButton>
          <Modal.Title>Create new meter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Utility</Form.Label>
              <Select
                components={animatedComponent}
                onChange={(items) => setSelectedUtilitiesMeterCreate(items)}
                options={Utilities}
                value={selectedUtilitiesMeterCreate}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Account Number"
                name="AccountNumberMeterCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Meter Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Meter Number"
                name="MeterNumberMeterCreate"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="CityMeterCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>State</Form.Label>
              <Select
                components={animatedComponent}
                onChange={(items) => setSelectedStatesMeterCreate(items)}
                options={States}
                value={selectedStatesMeterCreate}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Postal Code"
                name="PostalCodeMeterCreate"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Line 1"
                name="AddressLine1MeterCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Line 2"
                name="AddressLine2MeterCreate"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4 col-sm-12">
              <Form.Label>Address Line 3</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Line 3"
                name="AddressLine3MeterCreate"
              />
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeNewMeter}>
            Cancel
          </Button>
          <Button variant="primary" onClick={closeNewMeter}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Row>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <Form id="create_rfq_form_id" onSubmit={handleSubmit}>
                  <Tabs
                    defaultActiveKey="rfq"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="rfq" title="RFQ">
                      <Card>
                        <Card.Header>Details</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="col-12 mb-3">
                              <Form.Label>Is this a Wholesale RFQ ?</Form.Label>
                              <Form.Check type="switch" name="Wholesale" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>RFQ Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Name"
                                name="Name"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Direction</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) =>
                                  setSelectedDirections(items)
                                }
                                options={Directions}
                                value={selectedDirections}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>RFQ Type</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) => setSelectedTypes(items)}
                                options={Types}
                                value={selectedTypes}
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>RFQ Access</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) => setSelectedAccess(items)}
                                options={Access}
                                value={selectedAccess}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Reserve Price</Form.Label>
                              <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <Form.Control
                                  type="number"
                                  placeholder="Reserve Price"
                                  name="ReservePrice"
                                />
                                <span className="input-group-addon">kWh</span>
                              </div>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Benchmark Price</Form.Label>
                              <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <Form.Control
                                  type="number"
                                  placeholder="Benchmark Price"
                                  name="BenchmarkPrice"
                                />
                                <span className="input-group-addon">kWh</span>
                              </div>
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Target Price</Form.Label>
                              <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <Form.Control
                                  type="number"
                                  placeholder="Target Price"
                                  name="TargetPrice"
                                />
                                <span className="input-group-addon">kWh</span>
                              </div>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Proposed Start Time</Form.Label>
                              <Form.Group
                                style={{ float: 'right', display: 'flex' }}
                              >
                                <Form.Check
                                  type="radio"
                                  value="1"
                                  label="Scheduled"
                                  name="ProposedStartTimeRadio"
                                  style={{ marginLeft: '5px' }}
                                />
                                <Form.Check
                                  type="radio"
                                  value="2"
                                  label="Manual"
                                  name="ProposedStartTimeRadio"
                                  style={{ marginLeft: '5px' }}
                                />
                                <Form.Check
                                  type="radio"
                                  value="3"
                                  label="Auto"
                                  name="ProposedStartTimeRadio"
                                  style={{ marginLeft: '5px' }}
                                />
                              </Form.Group>
                              <div className="input-group">
                                <Form.Control
                                  type="date"
                                  placeholder="Proposed Start Time"
                                  name="ProposedStartTime"
                                />
                                <span className="input-group-addon">
                                  <i className="fa fa-calendar"></i>
                                </span>
                              </div>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Proposed End Time</Form.Label>
                              <Form.Group
                                style={{ float: 'right', display: 'flex' }}
                              >
                                <Form.Check
                                  type="radio"
                                  value="1"
                                  label="Scheduled"
                                  name="ProposedEndTimeRadio"
                                  style={{ marginLeft: '5px' }}
                                />
                                <Form.Check
                                  type="radio"
                                  value="2"
                                  label="Manual"
                                  name="ProposedEndTimeRadio"
                                  style={{ marginLeft: '5px' }}
                                />
                              </Form.Group>
                              <div className="input-group">
                                <Form.Control
                                  type="date"
                                  placeholder="Proposed End Time"
                                  name="ProposedEndTime"
                                />
                                <span className="input-group-addon">
                                  <i className="fa fa-calendar"></i>
                                </span>
                              </div>
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-3 col-sm-12">
                              <Form.Label>Is this a Wholesale RFQ ?</Form.Label>
                              <Form.Check type="switch" name="WholesaleRfq" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-3 col-sm-12">
                              <Form.Label>Chat ?</Form.Label>
                              <Form.Check type="switch" name="Chat" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-3 col-sm-12">
                              <Form.Label>Price Comments ?</Form.Label>
                              <Form.Check type="switch" name="PriceComments" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-3 col-sm-12">
                              <Form.Label>First Bid Blind ?</Form.Label>
                              <Form.Check type="switch" name="FirstBidBlind" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-3 col-sm-12">
                              <Form.Label>Send Customer Invite(s) ?</Form.Label>
                              <Form.Check
                                type="switch"
                                name="SendCustomerInvite"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-3 col-sm-12">
                              <Form.Label>
                                Hide Broker Fee from Customer ?
                              </Form.Label>
                              <Form.Check
                                type="switch"
                                name="HideBrokerFeefromCustomer"
                              />
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Row>
                        <Form.Group className="mb-3 col-md-4 col-sm-12">
                          <Form.Label>Description</Form.Label>
                          <Card.Header className="alert-validation">
                            5000 character limit, 5000 remaining
                          </Card.Header>
                          <Form.Control
                            className="border-radius-top-0"
                            name="Description"
                            maxLength={5000}
                            as="textarea"
                            rows={5}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-4 col-sm-12">
                          <Form.Label>
                            Guidelines and Special Instructions
                          </Form.Label>
                          <Card.Header className="alert-validation">
                            5000 character limit, 5000 remaining
                          </Card.Header>
                          <Form.Control
                            className="border-radius-top-0"
                            name="Guidelines"
                            maxLength={5000}
                            as="textarea"
                            rows={5}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-4 col-sm-12">
                          <Form.Label>Q & A</Form.Label>
                          <Card.Header className="alert-validation">
                            5000 character limit, 5000 remaining
                          </Card.Header>
                          <Form.Control
                            className="border-radius-top-0"
                            name="QA"
                            maxLength={5000}
                            as="textarea"
                            rows={5}
                          />
                        </Form.Group>
                      </Row>
                    </Tab>
                    <Tab eventKey="customer" title="Customer">
                      <Card>
                        <Card.Header>Customer Info</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>
                                Select an existing customer
                              </Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) =>
                                  setSelectedExistCustomers(items)
                                }
                                options={ExistCustomers}
                                value={selectedExistCustomers}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3 col-md-4 col-sm-12"
                              style={{ paddingTop: '24px' }}
                            >
                              <Button
                                className="btn btn-success"
                                onClick={createNewCustomer}
                                style={{ marginTop: '0.3rem' }}
                              >
                                <i className="mr-5 fa fa-plus"></i>Create New
                                Customer
                              </Button>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              {/*<Image src={logo} rounded />*/}
                              <img
                                className="logo-rfq"
                                src="../../../../../Assets/images/no_image.gif"
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Customer Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Customer Name"
                                name="CustomerName"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Domain</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Domain"
                                name="Domain"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Address</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Address"
                                name="Address"
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>City</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="City"
                                name="City"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Country</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) =>
                                  setSelectedCountries(items)
                                }
                                options={Countries}
                                value={selectedCountries}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>State</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) => setSelectedStates(items)}
                                options={States}
                                value={selectedStates}
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Postal Code</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Postal Code"
                                name="PostalCode"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Number of Employees</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Number of Employees"
                                name="NumberEmployees"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Founded</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Founded"
                                name="Founded"
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Website</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Website"
                                name="Website"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Duns</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Duns"
                                name="Duns"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Tax Id</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Tax Id"
                                name="TaxId"
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Legal Business Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Legal Business Name"
                                name="LegalBusinessName"
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-12">
                              <Form.Label>About</Form.Label>
                              <Form.Control
                                name="About"
                                as="textarea"
                                rows={5}
                              />
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Header>Contract Info</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>
                                Select an existing contract
                              </Form.Label>
                              <Select
                                isMulti
                                closeMenuOnSelect={false}
                                components={animatedComponent}
                                onChange={(items) =>
                                  setSelectedContracts(items)
                                }
                                options={Contracts}
                                value={selectedContracts}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3 col-md-4 col-sm-12"
                              style={{ paddingTop: '24px' }}
                            >
                              <Button
                                className="btn btn-success"
                                style={{ marginTop: '0.3rem' }}
                              >
                                <i className="mr-5 fa fa-plus"></i>Create new
                                Contract
                              </Button>
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Tab>
                    <Tab eventKey="contract" title="Contract">
                      <Card>
                        <Card.Header>Contract Parameters</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Start Date</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="date"
                                  placeholder="Start Date"
                                  name="StartDate"
                                />
                                <span className="input-group-addon">
                                  <i className="fa fa-calendar"></i>
                                </span>
                              </div>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Commodity</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) =>
                                  setSelectedCommodities(items)
                                }
                                options={Commodities}
                                value={selectedCommodities}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Country</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) =>
                                  setSelectedCountriesContracts(items)
                                }
                                options={Countries}
                                value={selectedCountriesContracts}
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>State</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) =>
                                  setSelectedStatesContracts(items)
                                }
                                options={States}
                                value={selectedStatesContracts}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Minimum Bandwidth</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="text"
                                  placeholder="Minimum Bandwidth"
                                  name="MinimumBandwidth"
                                />
                                <span className="input-group-addon">%</span>
                              </div>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Delivery Point</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Delivery Point"
                                name="DeliveryPoint"
                              />
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Annual Procurement Amount</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="text"
                                  placeholder="Annual Procurement Amount"
                                  name="AnnualProcurementAmount"
                                />
                                <span className="input-group-addon">kWh</span>
                              </div>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Procurement Unit</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) =>
                                  setSelectedProcurementUnits(items)
                                }
                                options={ProcurementUnits}
                                value={selectedProcurementUnits}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Fee</Form.Label>
                              <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <Form.Control
                                  type="text"
                                  placeholder="Fee"
                                  name="Fee"
                                />
                                <span className="input-group-addon">kWh</span>
                              </div>
                            </Form.Group>
                          </Row>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>
                                Renewable Content Requirement
                              </Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="text"
                                  placeholder="Renewable Content Requirement"
                                  name="RenewableContentRequirement"
                                />
                                <span className="input-group-addon">%</span>
                              </div>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>
                                Term (comma seperated list)
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="6, 12, 24, 36, 48, 60"
                                name="Term"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>
                                Allow Supplier to quote alternate Terms
                              </Form.Label>
                              <Form.Check type="switch" name="AllowSupplier" />
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Header>Product Types</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Product Type</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) => setProductTypes(items)}
                                options={ProductTypes}
                                value={selectedProductTypes}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Product Type Description</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Product Type Description"
                                name="ProductTypeDescription"
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3 col-md-4 col-sm-12"
                              style={{ paddingTop: '24px' }}
                            >
                              <Button
                                className="btn btn-success"
                                style={{ marginTop: '0.3rem' }}
                              >
                                <i className="mr-5 fa fa-plus"></i>Add
                              </Button>
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Header>Billing Parameters</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Payment Term</Form.Label>
                              <div className="input-group">
                                <Form.Control
                                  type="text"
                                  placeholder="Payment Term"
                                  name="PaymentTerm"
                                />
                                <span className="input-group-addon">days</span>
                              </div>
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Bill Type</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) => setBillTypes(items)}
                                options={BillTypes}
                                value={selectedBillTypes}
                              />
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Tab>
                    <Tab eventKey="account" title="Account">
                      <Card>
                        <Card.Header>Accounts</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Number of Accounts</Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="Number of Accounts"
                                name="NumberAccounts"
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Utilities</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) => setUtilities(items)}
                                options={Utilities}
                                value={selectedUtilities}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3 col-md-4 col-sm-12"
                              style={{ paddingTop: '24px' }}
                            >
                              <Button
                                className="btn btn-success"
                                onClick={createNewMeter}
                                style={{ marginTop: '0.3rem' }}
                              >
                                <i className="mr-5 fa fa-plus"></i>Create New
                                Meter
                              </Button>
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Card.Header>
                        Select an existing Meter from the Customer
                      </Card.Header>
                      <CommonDataGrid
                        titleParam={''}
                        url={urlAccountsExistinMeter}
                        columns={columnsAccountsExistinMeter}
                        options={options}
                      />
                    </Tab>
                    <Tab eventKey="documents" title="Documents">
                      <Row>
                        <Form.Group className="mb-3 col-md-6 col-sm-12">
                          <Card>
                            <Card.Body>
                              <Card.Header className="mb-3">
                                Select a document to add to the RFQ
                              </Card.Header>
                              <Form.Control type="file" name="document" />
                              <label className="alert-validation float-end">
                                Max file size 20mb
                              </label>
                            </Card.Body>
                          </Card>
                        </Form.Group>

                        <Form.Group className="mb-3 col-md-6 col-sm-12">
                          <Card>
                            <Card.Body>
                              <Card.Header className="mb-3">
                                Document List
                              </Card.Header>
                              <ListGroup>
                                <ListGroupItem>Item 1</ListGroupItem>
                                <ListGroupItem>Item 2</ListGroupItem>
                                <ListGroupItem>Item 3</ListGroupItem>
                              </ListGroup>
                            </Card.Body>
                          </Card>
                        </Form.Group>
                      </Row>
                    </Tab>
                    <Tab eventKey="suppliers" title="Invitation">
                      <Card>
                        <Card.Header>Select a supplier to invite</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Supplier Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="SupplierName"
                                name="SupplierName"
                              />
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Tab>
                    <Tab eventKey="userPermissions" title="User Permissions">
                      <Card>
                        <Card.Header>Add user role</Card.Header>
                        <Card.Body>
                          <Row>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Select an existing user</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) => setSelectedUsers(items)}
                                options={Users}
                                value={selectedUsers}
                              />
                            </Form.Group>
                            <Form.Group className="mb-3 col-md-4 col-sm-12">
                              <Form.Label>Select a user role</Form.Label>
                              <Select
                                components={animatedComponent}
                                onChange={(items) => setSelectedRoles(items)}
                                options={Roles}
                                value={selectedRoles}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3 col-md-4 col-sm-12"
                              style={{ paddingTop: '24px' }}
                            >
                              <Button
                                className="btn btn-success"
                                onClick={addUser}
                                style={{ marginTop: '0.3rem' }}
                              >
                                <i className="mr-5 fa fa-plus"></i>Add user
                              </Button>
                            </Form.Group>
                          </Row>
                        </Card.Body>
                      </Card>
                      <Row>
                        <CommonDataGrid
                          titleParam={''}
                          url={urlUserPermissions}
                          columns={columnsUserPermissions}
                          options={options}
                        />
                      </Row>
                    </Tab>
                  </Tabs>
                  <Card.Footer>
                    <Form.Group
                      className="mb-3 col-12 text-right"
                      style={{ paddingTop: '24px' }}
                    >
                      <Button
                        className="mr-5 btn btn-success"
                        onClick={saveDraft}
                      >
                        Save as Draft
                      </Button>
                      <Button
                        className="mr-5 btn btn-success"
                        onClick={savePublish}
                      >
                        Save and Publish
                      </Button>
                      <a
                        type="button"
                        href="CMRfq/list"
                        className="btn btn-danger"
                      >
                        Cancel
                      </a>
                    </Form.Group>
                  </Card.Footer>
                </Form>
              </div>
            </div>
          </div>
        </Row>
      </Row>
    </>
  );
};

export default RfqCreate;
