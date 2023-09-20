import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalB = ({ show, handleClose, switchingModalsA }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal B</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don not even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={switchingModalsA}>
          All Contacts
        </Button>
        <Button variant="secondary">Us Contacts</Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalB;
