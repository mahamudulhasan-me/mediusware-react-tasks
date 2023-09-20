import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalA = ({ show, handleClose, switchingModalsB, contacts }) => {
  const [checked, setChecked] = useState(false);
  const handleEvenIdContacts = (e) => {
    setChecked(e.target.checked);
  };

  const contactsValue = checked
    ? contacts.filter((contact) => contact.id % 2 === 0)
    : contacts;

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal A</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {contactsValue?.map((contact) => (
          <div key={contact.id}>
            <p>
              <strong className="font-weight-bold">ID-{contact?.id}: </strong>
              {contact?.phone}
            </p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <input
            onChange={handleEvenIdContacts}
            type="checkbox"
            checked={checked}
          />
          <label htmlFor=""> Only Even</label>
        </div>
        <Button variant="secondary">All Contacts</Button>
        <Button variant="secondary" onClick={switchingModalsB}>
          US Contacts
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
