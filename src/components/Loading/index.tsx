import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <>
      <Spinner variant="primary" animation="grow" />
      <Spinner variant="secondary" animation="grow" />
      <Spinner variant="success" animation="grow" />
      <Spinner variant="danger" animation="grow" />
      <Spinner variant="warning" animation="grow" />
      <Spinner variant="info" animation="grow" />
      <Spinner variant="dark" animation="grow" />
    </>
  );
};

export default Loading;
