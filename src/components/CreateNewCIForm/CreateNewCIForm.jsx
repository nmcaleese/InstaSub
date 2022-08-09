import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function CreateNewCIForm({setPopulatedModules, populatedModules, idx, setActiveModule}){
    const [show, setShow] = useState(false);

  const handleClose = () => {
    setPopulatedModules(populatedModules.splice(0,1,'title of CI'))
    console.log(populatedModules)
    setActiveModule(null)
    setShow(false)
    };


  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create new Classroom Instruction Form
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Classroom Instruction Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
