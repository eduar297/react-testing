import { Modal as _Modal, Button, Container } from 'react-bootstrap';

type ModalProps = {
  show: boolean;
  title: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  handleClose: () => void;
};

function Modal({ title, body, footer, handleClose, show }: ModalProps) {
  return (
    <_Modal
      show={show}
      onHide={handleClose}
      // fullscreen
      size="xl"
      centered
    >
      <_Modal.Header closeButton>
        <_Modal.Title>{title}</_Modal.Title>
      </_Modal.Header>
      <_Modal.Body>{body}</_Modal.Body>
      <_Modal.Footer>{footer}</_Modal.Footer>
    </_Modal>
  );
}

export default Modal;
