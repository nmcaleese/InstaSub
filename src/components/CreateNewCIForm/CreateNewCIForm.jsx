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
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the new CI object included in the
      // payload of the JSON Web Token (JWT)
      console.log(instructions)
      // const newCI = await CIAPI.create(instructions);
      // update state of the CI list in this form, the form should mimic handleChange in its structure:
      handleAdd(newCI);
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