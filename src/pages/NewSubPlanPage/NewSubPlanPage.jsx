import { useState } from "react"
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"
import Button from "react-bootstrap/button"
import CICard from "../../components/Cards/CICard"
import FirstFiveCard from "../../components/Cards/FirstFiveCard"
import LessonPlanCard from "../../components/Cards/LessonPlanCard"
import ExitTicketCard from "../../components/Cards/ExitTicketCard"


export default function NewSubPlanPage(){


const [populatedModules, setPopulatedModules] = useState([null , null , null, null])

const [activeModule, setActiveModule] = useState(null)

const modules = [
    {
        name: 'Classroom Instructions',
        module: <AddCIPage setActiveModule= {setActiveModule} setPopulatedModules={setPopulatedModules} populatedModules={populatedModules} />,
    },
    {
        name: 'First 5ive',
        module: <AddFirstFivePage setActiveModule= {setActiveModule} setPopulatedModules={setPopulatedModules} populatedModules={populatedModules}  />,
    },
    {
        name: 'Lesson Plan',
        module: <AddLessonPlanPage setActiveModule= {setActiveModule} setPopulatedModules={setPopulatedModules} populatedModules={populatedModules} />,
    },
    {
        name: 'Exit Ticket',
        module: <AddExitTicketPage setActiveModule= {setActiveModule} setPopulatedModules={setPopulatedModules} populatedModules={populatedModules}/>,  
    },
]

const populatePage = populatedModules.map(function(module, idx){
    if (module && idx === 0){
        return <CICard module={module}/>
    } else if (module && idx === 1){
        return <FirstFiveCard module={module}/>
    } else if (module && idx === 2){
        return <LessonPlanCard module={module}/>
    } else if (module && idx === 3){
        return <ExitTicketCard module={module}/>
    } else { return <Button variant="success" size="lg" onClick={() => setActiveModule(modules[idx].module) } >add {modules[idx].name}</Button>}
})

    return (
        <>
            <br />
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
        </>
    )
}
