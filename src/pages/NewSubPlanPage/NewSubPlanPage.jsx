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
    

const [populatedModules, setPopulatedModules] = useState([`rabbit`, `rabbit`, `rabbit`, `rabbit`])


function populatePage() {
    console.log(`this is the modules array ${modules}`)
    console.log(`this is the populatedModules array ${populatedModules}`)
    populatedModules.map(module=> {
        <h1>{module}</h1>
    })
}

    return (
        <div>
            {populatedModules.map(module=> <h1>{module}</h1>)}
        </div> 
    )
}

