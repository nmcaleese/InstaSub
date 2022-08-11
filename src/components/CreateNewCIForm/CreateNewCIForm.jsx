import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'



export default function CreateNewCIForm(){
    const [show, setShow] = useState(false);

  const handleClose = () => {
    // create a new CI


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
        <form>
          <Modal.Body>



{/* modal form for the creation of a new CI */}

{/* FORMS IN BOOTSTRAP:
The <FormControl> component renders a form control with Bootstrap styling. The <FormGroup> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on <FormGroup>, and use <FormLabel> for the label. */}
        
          <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Class</InputGroup.Text>
                  <Form.Control
                    placeholder="Name of Class"
                    aria-label="Name of Class"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="period"
                    aria-label="period"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">Period</InputGroup.Text>
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>Overall Classroom Instructions</InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
