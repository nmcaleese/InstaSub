import { useState } from "react"
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"
import Button from "react-bootstrap/button"


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
    if (module){
        return <h1>Classroom Instructions for {module.class} period {module.period}</h1>
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
