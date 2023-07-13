import { Spinner } from 'reactstrap';

const Loading = () => {
  return (
    <>
      <Spinner color="primary" type="grow">
        Loading...
      </Spinner>
      <Spinner color="secondary" type="grow">
        Loading...
      </Spinner>
      <Spinner color="success" type="grow">
        Loading...
      </Spinner>
      <Spinner color="danger" type="grow">
        Loading...
      </Spinner>
      <Spinner color="warning" type="grow">
        Loading...
      </Spinner>
      <Spinner color="info" type="grow">
        Loading...
      </Spinner>
      <Spinner color="dark" type="grow">
        Loading...
      </Spinner>
    </>
  );
};

export default Loading;
