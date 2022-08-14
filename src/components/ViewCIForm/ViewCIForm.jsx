import { useState } from 'react';
import * as CIAPI from '../../utilities/classroomInstructions-api';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'


export default function ViewCIForm({CI, handleUpdate, handleRemove}) {
  
  const [instructions, setInstructions] = useState({
    class: CI.class,
    period: CI.period,
    classroomInstructions: CI.classroomInstructions,
  });
  
  const [error, setError] = useState('');

  function handleChange(evt) {
    setInstructions({ ...instructions, [evt.target.name]: evt.target.value });
    setError('');
  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      instructions.id = CI._id
      const updatedCI = await CIAPI.updateCI(instructions);
      handleUpdate(updatedCI)
    } catch {
      setError('Failed to update instructions');
    }
  }

  async function handleDelete(){
    try {
      const deletedCIId = await CIAPI.deleteCI(CI)
      handleRemove(deletedCIId)
    } catch {
      setError('failed to delete')
    }
  }

  return (
    <>
    <style type="text/css">
      {`
      .view-CI-card {
        background: rgba(241, 241, 241, 1);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
      }
      `}
    </style>
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Card bsPrefix='view-CI-card'>
              <Card.Body className='p-3'>
                <h1>Update Classroom Instructions</h1>
                <Form autoComplete='off' onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId={instructions.class}>
                          <Form.Control type='text' placeholder='What class is it for?' name='class' onChange={handleChange} value={instructions.class} required />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId={instructions.period}>
                        <Form.Control type='text' placeholder='What period?' name='period' onChange={handleChange} value={instructions.period} required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId={instructions.classroomInstructions}>
                    <Form.Control as="textarea" rows={3} placeholder='What does your sub need to know about the class?' name='classroomInstructions' onChange={handleChange} value={instructions.classroomInstructions} required />
                  </Form.Group>
                  <br />
                  <ButtonGroup className="mb-2">
                    <Button variant='secondary' onClick={handleDelete} >Delete</Button>
                    <Button variant='success' type="submit">Update</Button>
                  </ButtonGroup>
                </Form> 
                  <p className="error-message">&nbsp;{error}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}