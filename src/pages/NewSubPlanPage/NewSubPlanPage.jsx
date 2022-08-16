import { useState, useEffect } from "react"
import * as SubPlanAPI from '../../utilities/subplan-api'
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddCIPage from "../AddCIPage/AddCIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"
import AddSubPlanNameForm from "../../components/AddSubPlanNameForm/AddSubPlanNameForm"
import CICard from "../../components/Cards/CICard"
import FirstFiveCard from "../../components/Cards/FirstFiveCard"
import LessonPlanCard from "../../components/Cards/LessonPlanCard"
import ExitTicketCard from "../../components/Cards/ExitTicketCard"
import SubPlanNameCard from "../../components/Cards/SubPlanNameCard"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/button"

export default function NewSubPlanPage(){


const [populatedModules, setPopulatedModules] = useState([null , null , null, null, null])

const [toggleState, setToggleState] = useState(false)

const [activeModule, setActiveModule] = useState(null)

const [error, setError] = useState('')

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
    {
        name: 'what do you want to call your new Sub Plan?',
        module: <AddSubPlanNameForm setActiveModule= {setActiveModule} setPopulatedModules={setPopulatedModules} populatedModules={populatedModules}/>
    }
]

useEffect(function(){
    setPopulatedModules(populatedModules)
},[toggleState])


const populatePage = populatedModules.map(function(module, idx){
    if (module && idx === 0){
        return <CICard module={module} idx ={idx} removeCard={removeCard} />
    } else if (module && idx === 1){
        return <FirstFiveCard module={module} idx ={idx} removeCard={removeCard}/>
    } else if (module && idx === 2){
        return <LessonPlanCard module={module} idx ={idx} removeCard={removeCard}/>
    } else if (module && idx === 3){
        return <ExitTicketCard module={module} idx ={idx} removeCard={removeCard}/>
    } else if (module && idx === 4){
        return <SubPlanNameCard module={module} idx ={idx} removeCard={removeCard}/>
    } else { return <Button variant="success" size="lg" onClick={() => setActiveModule(modules[idx].module) } >add {modules[idx].name}</Button>}
})

function removeCard(idx){
    console.log('clicked')
        const populatedModulesCopy = populatedModules
        populatedModulesCopy.splice(idx, 1, null)
        setPopulatedModules(populatedModulesCopy)
        setToggleState(!toggleState)
        }


    async function createSubPlan() {
        console.log('clicked', populatedModules)
        try {
            const newSubPlan = await SubPlanAPI.createSubPlan(populatedModules);
            console.log('this is it', newSubPlan.name)
            // handleAdd(newSubPlan);

            //RESET STATE to NULL
        } catch {
            setError('Failed to save Sub Plan');
        }
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
                                <Button onClick={createSubPlan} variant='success' type="submit" >Create Sub Plan</Button>
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        </>
    )
}
