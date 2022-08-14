import { useState } from 'react';
import * as CIAPI from '../../utilities/classroomInstructions-api';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'


export default function CreateNewCIForm({handleAdd}) {
  
  const [instructions, setInstructions] = useState({
    class: '',
    period: '',
    classroomInstructions: '',
  });
  
  const [error, setError] = useState('');

  function handleChange(evt) {
    setInstructions({ ...instructions, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const newCI = await CIAPI.createCI(instructions);
      handleAdd(newCI);
      setInstructions({
        class: '',
        period: '',
        classroomInstructions: '',
      })
    } catch {
      setError('Failed to save instructions');
    }
  }



  return (
    <>
      <style type="text/css">
        {`
        .new-CI-container{
          background: rgba(241, 241, 241, 1);
          box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        }
        .new-CI-card {
          background: rgba(0, 0, 0, 0)
        }
        `}
      </style>

      <Container bsPrefix='new-CI-container' >
        <Card bsPrefix='new-CI-card'>
          <Card.Body className='p-3' >
            <h1>New Classroom Instructions</h1>
            <Form autoComplete="off" onSubmit={handleSubmit} > 
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
                <div className="d-grid gap-2">
                  <Button  variant='success' type="submit" disabled={!(instructions.class && instructions.period && instructions.classroomInstructions)}>Create</Button>
                </div>
            </Form> 
            <p className="error-message">&nbsp;{error}</p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}