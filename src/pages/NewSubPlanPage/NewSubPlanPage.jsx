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
    

const [populatedModules, setPopulatedModules] = useState([null , null , null, null])

const [activeModule, setActiveModule] = useState(null)

const populatePage = populatedModules.map(function(module, idx){
    if (module){
        return <h1>{modules[idx]}</h1>
    } else {return <button onClick={() => console.log('clicked') } >{modules[idx]}</button>}
})


    return (
        <div>
            { activeModule ? 
            <div>
                currentModule
            </div>
            :
            <div>
                {populatePage}
            </div>
            }
        </div>
    )
}

