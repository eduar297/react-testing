import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <>
      <Spinner variant="primary" animation="grow">
        Loading...
      </Spinner>
      <Spinner variant="secondary" animation="grow">
        Loading...
      </Spinner>
      <Spinner variant="success" animation="grow">
        Loading...
      </Spinner>
      <Spinner variant="danger" animation="grow">
        Loading...
      </Spinner>
      <Spinner variant="warning" animation="grow">
        Loading...
      </Spinner>
      <Spinner variant="info" animation="grow">
        Loading...
      </Spinner>
      <Spinner variant="dark" animation="grow">
        Loading...
      </Spinner>
    </>
  );
};

export default Loading;
