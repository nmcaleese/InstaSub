import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"
import { Routes, Route, Link } from 'react-router-dom'

export default function NewSubPlanPage(){
    return (
    <div>
       <> 
        <h1>new sub plan page</h1>
        {/* 
        1. add links to module creation pages that will populate below the links on the page. 
        2. When the links are added, they will replace the prompt in the link.
        3. Use a ternary to determine the inner text of the link */}
        <Link to="/ci/add">Add Classroom Instructions</Link>
        &nbsp; | &nbsp;
        <Link to="/first-five/add">Add First Five</Link>
        &nbsp; | &nbsp;
        <Link to="/lesson-plan/add">Add Lesson Plan</Link>
        &nbsp; | &nbsp;
        <Link to="/exit-ticket/add">Add Exit Ticket</Link>
        <Routes>
            <Route path='/ci/add' element={< AddCIPage />} />
            <Route path='/first-five/add' element={< AddFirstFivePage />} />
            <Route path='/lesson-plan/add' element={< AddLessonPlanPage />} />
            <Route path='/exit-ticket/add' element={< AddExitTicketPage />} />
        </Routes> 
        </>
        
        
    </div>
    
    )
}