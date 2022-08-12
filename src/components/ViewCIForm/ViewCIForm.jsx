import { useState } from 'react';
import * as CIAPI from '../../utilities/classroomInstructions-api';

export default function ViewCIForm({CI, handleUpdate}) {
  
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

// HANDLESUBMIT SHOULD REPLACE EACH ELEMENT  

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the new CI object included in the
      // payload of the JSON Web Token (JWT)
      instructions.id = CI._id
      console.log(instructions)

    const updatedCI = await CIAPI.updateCI(instructions);

    console.log(`this is the updatedCI ${updatedCI}`)
    } catch {
      setError('Failed to update instructions');
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