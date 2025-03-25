import { Modal, Button } from 'react-bootstrap';

const ModalDialog = ({ show, onHide, children }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDialog;