import { useState } from "react"
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
        return <CICard module={module} idx ={idx} removeCard={removeCard} />
    } else if (module && idx === 1){
        return <FirstFiveCard module={module} idx ={idx} removeCard={removeCard}/>
    } else if (module && idx === 2){
        return <LessonPlanCard module={module} idx ={idx} removeCard={removeCard}/>
    } else if (module && idx === 3){
        return <ExitTicketCard module={module} idx ={idx} removeCard={removeCard}/>
    } else { return <Button variant="success" size="lg" onClick={() => setActiveModule(modules[idx].module) } >add {modules[idx].name}</Button>}
})

//preferably feed this funciton into the card module
function removeCard(idx){
    console.log('clicked')
        const populatedModulesCopy = populatedModules
        populatedModulesCopy.splice(idx, 1, null)
        setPopulatedModules(populatedModulesCopy)
        }

    return (
        <>
            <br />
            <div>
                { activeModule ? 
                    <div>
                        {activeModule}
                    </div>
                :
                    <Container>
                        {populatePage}
                        <Row>
                            <Col>
                                <Button onClick={() => console.log('clicked')} variant='success' type="submit" disabled={!populatedModules.find(module => module === null)}>Create Sub Plan</Button>
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        </>
    )
}
