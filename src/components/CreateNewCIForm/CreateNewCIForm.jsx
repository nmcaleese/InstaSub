import { useState } from 'react';
import * as CIAPI from '../../utilities/classroomInstructions-api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
    <div>
      <h1>New Classroom Instructions</h1>
      <Form autoComplete="off" onSubmit={handleSubmit} > 
        <Form.Group className="mb-3" controlId={instructions.class}>
            <Form.Label>Overview of the Class</Form.Label>
            <Form.Control type='text' placeholder='What class is it for?' name='class' onChange={handleChange} value={instructions.class} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId={instructions.period}>
            <Form.Control type='text' placeholder='What period?' name='period' onChange={handleChange} value={instructions.period} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId={instructions.classroomInstructions}>
            <Form.Control as="textarea" rows={3} placeholder='What does your sub need to know about the class?' name='classroomInstructions' onChange={handleChange} value={instructions.classroomInstructions} required />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant='success' type="submit">Create</Button>
        </div>
      </Form> 
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}