import { useState } from "react"
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"


// function for each module:

// function handleAddCIPage(){
//         return < AddCIPage />
//     }
// function handleAddFirstFivePage(){
//         return < AddFirstFivePage />
//     }
// function handleAddLessonPlanPage(){
//         return < AddLessonPlanPage />
//     }
// function handleAddExitTicketPage(){
//         return < AddExitTicketPage />
//     }




export default function NewSubPlanPage(){
//     set a constant array that has module names

const modules = ['AddCIPage', 'AddFirstFivePage', 'AddLessonPlanPage', 'AddExitTicketPage']
    

const [populatedModules, setPopulatedModules] = useState([`temp`, `temp`, `temp`, `temp`])


const populatePage = populatedModules.map(module=> {
    return <h1>{module}</h1>
})


    return (
        <div>
            {populatePage}
        </div> 
    )
}

