import { useState } from "react"
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"




export default function NewSubPlanPage(){

const modules = {
    CIPage: {
        name: 'Classroom Instructions',
        module: <AddCIPage />,
        populated: null,
    },
    FirstFivePage: {
        name: 'First 5ive',
        module: <AddFirstFivePage />, 
        populated: true,
    },
    LessonPlanPage: {
        name: 'Lesson Plan',
        module: <AddLessonPlanPage />, 
        populated: null,
    },
    ExitTicket: {
        name: 'Exit Ticket',
        module: <AddExitTicketPage />, 
        populated: null,
    },
}

    return (
        <div>
            {modules.CIPage.populated ?
            <h1>{modules.CIPage.module}</h1>
            :
            <h1>not populated</h1>
            }
            {modules.FirstFivePage.populated ?
            <h1>{modules.CIPage.name}</h1>
            :
            <h1>not populated</h1>
            }
            {modules.LessonPlanPage.populated ?
            <h1>{modules.LessonPlanPage.module}</h1>
            :
            <h1>not populated</h1>
            }
        </div>
    )
}








// const populatePage = function(){
//     for(const module in modules){
//         if(modules[module].populated){
//             return <h1>{modules[module].name}</h1>
//         } else { console.log(`not ${module}`)}
//     }
// }





// const [populatedModules, setPopulatedModules] = useState([null , null , null, null])

// const [activeModule, setActiveModule] = useState(null)




// const populatePage = populatedModules.map(function(module, idx){
    //     if (module){
    //         return <h1>{modules[idx]}</h1>
    //     } else { return <button onClick={() => setActiveModule(modules[idx]) } >{buttons[idx]}</button>}
    // })