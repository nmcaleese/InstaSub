import { useState } from 'react';
import * as CIAPI from '../../utilities/classroomInstructions-api';

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
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Class</label>
          <input type="text" name="class" value={instructions.class} onChange={handleChange} required />
          <label>Period</label>
          <input type="text" name="period" value={instructions.period} onChange={handleChange} required />
          <label>Classroom Instructions</label>
          <input type="text" name="classroomInstructions" value={instructions.classroomInstructions} onChange={handleChange} required />
          <button type="submit">Create</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}