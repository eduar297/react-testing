import { Spinner as _Spinner } from 'react-bootstrap';

const Spinner: React.FC = () => (
  <_Spinner
    animation="grow"
    size="sm"
    variant="primary"
    role="status"
    aria-hidden="true"
  />
);

export default Spinner;
