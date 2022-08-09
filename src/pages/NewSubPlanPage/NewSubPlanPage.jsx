import { useState } from "react"
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"





export default function NewSubPlanPage(){
//     set a constant array that has module names


const modules = [
    <AddCIPage />, 
    <AddFirstFivePage />, 
    <AddLessonPlanPage />, 
    <AddExitTicketPage />
]
const buttons = [
    'Add Classroom Instructions', 
    'Add First Five', 
    'Add Lesson Plan', 
    'Add Exit Ticket'
]

const [populatedModules, setPopulatedModules] = useState([null , null , null, null])

const [activeModule, setActiveModule] = useState(null)

const populatePage = populatedModules.map(function(module, idx){
    if (module){
        return <h1>{modules[idx]}</h1>
    } else {return <button onClick={() => setActiveModule(modules[idx]) } >{buttons[idx]}</button>}
})


    return (
        <div>
            { activeModule ? 
            <div>
                {activeModule}
            </div>
            :
            <div>
                {populatePage}
            </div>
            }
        </div>
    )
}

