import { useState } from "react"
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"

export default function NewSubPlanPage(){

const modules = [
    {
        name: 'Classroom Instructions',
        module: <AddCIPage />,
        populated: null,
    },
    {
        name: 'First 5ive',
        module: <AddFirstFivePage />, 
        populated: null,
    },
    {
        name: 'Lesson Plan',
        module: <AddLessonPlanPage />, 
        populated: null,
    },
    {
        name: 'Exit Ticket',
        module: <AddExitTicketPage />, 
        populated: null,
    },
]


const [populatedModules, setPopulatedModules] = useState([null , null , null, null])

const [activeModule, setActiveModule] = useState(null)


const populatePage = populatedModules.map(function(module, idx){
    if (module){
        return <h1>{modules[idx]}</h1>
    } else { return <button onClick={() => setActiveModule(modules[idx].module) } >add {modules[idx].name}</button>}
})

function handlePopulated(module){
    console.log(module.populated)
    module.populated ? module.populated = 'populated' : module.populated = null
    console.log(module.populated)
}


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







{/* 

NON ARRAY VERSION THAT JASON SUGGESTED 

const modules = {
    CIPage: {
        name: 'Classroom Instructions',
        module: <AddCIPage />,
        populated: null,
    },
    FirstFivePage: {
        name: 'First 5ive',
        module: <AddFirstFivePage />, 
        populated: null,
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

<div>
                {modules.CIPage.populated ?
                <h1>{modules.CIPage.name}</h1>
                :
                <button onClick={()=> handlePopulated(modules.CIPage)} >Add {modules.CIPage.name}</button>
                }
                {modules.FirstFivePage.populated ?
                <h1>{modules.FirstFivePage.name}</h1>
                :
                <button>Add {modules.FirstFivePage.name}</button>
                }
                {modules.LessonPlanPage.populated ?
                <h1>{modules.LessonPlanPage.name}</h1>
                :
                <button>Add {modules.LessonPlanPage.name}</button>
                }
                {modules.ExitTicket.populated ?
                <h1>{modules.ExitTicket.name}</h1>
                :
                <button>Add {modules.ExitTicket.name}</button>
                }
            </div> */}
