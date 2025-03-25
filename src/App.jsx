import { useState } from 'react';
import ModalDialog from './components/Modal.jsx';
import { Button, Container, Stack, Row, Col } from 'react-bootstrap';
import PasswordInput from './components/PasswordInput.jsx';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);

  const [showPasswordInput, setVisiblyPasswordInput] = useState(false);
  const handlePasswordInput = () => setVisiblyPasswordInput(!showPasswordInput);

  return (
    <Container className="d-flex mt-5">
      <ModalDialog show={showModal} onHide={handleHide}>
        <p>This is a demo modal content.</p>
      </ModalDialog>
      <Row>
        <Stack gap={3}>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
          <Button variant="primary" onClick={handlePasswordInput}>
            Launch demo form
          </Button>
        </Stack>
      </Row>
      <Row className="mx-auto">
        <Col>
          {showPasswordInput && <PasswordInput />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;