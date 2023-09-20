import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalA = ({ show, handleClose, switchingModalsB }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal A</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don not even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <div>
          <input type="checkbox" name="" id="" />{" "}
          <label htmlFor="">Only Even</label>
        </div>
        <Button variant="secondary">All Contacts</Button>
        <Button variant="secondary" onClick={switchingModalsB}>
          Us Contacts
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
