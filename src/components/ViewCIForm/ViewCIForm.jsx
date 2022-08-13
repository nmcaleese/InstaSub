import { useState } from 'react';
import * as CIAPI from '../../utilities/classroomInstructions-api';

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
    console.log('clicked')
    try {
      const deletedCIId = await CIAPI.deleteCI(CI)
      handleRemove(deletedCIId)
    } catch {
      setError('failed to delete')
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
          
          <button type="submit">Update</button>
        </form>
        <button onClick={handleDelete} >Delete</button>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}