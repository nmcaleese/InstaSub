import { useState, useEffect } from 'react'
import ClassroomInstructions from '../../components/ClassroomInstructions/ClassroomInstructions'
import ViewCIForm from '../../components/ViewCIForm/ViewCIForm'
import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'
import * as CIAPI from '../../utilities/classroomInstructions-api'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
    
export default function AddCIPage({setActiveModule, setPopulatedModules, populatedModules}){


const [index, setIndex] = useState([])
const[activeCI, setActiveCI] = useState(null)

const indexCIs = index.map(CI => <ClassroomInstructions CI={CI} key={CI._id} addCI={addCI} viewCI={viewCI}/>)



function addCI(CI){
    const populatedModulesCopy = populatedModules
    populatedModulesCopy.splice(0, 1, CI)
        setPopulatedModules(populatedModulesCopy)
        //function that adds CI object to 
        setActiveModule(null)
    }

function handleAdd(newCI){
    setIndex([...index, newCI])
}

function handleUpdate(updatedCI){
    const indexCopy = [...index]
    const idx = indexCopy.findIndex(CI => CI._id === updatedCI._id)
    indexCopy.splice(idx, 1, updatedCI)
    setIndex(indexCopy)
    setActiveCI(null)
}

function handleRemove(deletedCIId){
    const indexCopy = [...index]
    const idx = indexCopy.findIndex(CI => CI._id === deletedCIId)
    indexCopy.splice(idx, 1)
    setIndex(indexCopy)
    setActiveCI(null)
}

async function viewCI(CI){
    const viewCI = await CIAPI.viewCI(CI._id)
    setActiveCI(<ViewCIForm CI={viewCI} handleUpdate={handleUpdate} handleRemove={handleRemove}/>)
}

useEffect( function(){
    async function getCIs() {
        const CIs = await CIAPI.getAll();
        setIndex(CIs)
    }
    getCIs()
},[])

    return (
        <Container fluid> 
            { activeCI ? 
            <Row>
                {activeCI}
            </Row>
            :
            <>
                <Row>
                    <Col>
                    <CreateNewCIForm handleAdd={handleAdd}/>
                    </Col>
                </Row>
                <Row xs={1} md={4} lg={4} xl={8} className="g-4">
                    {indexCIs}
                </Row>
            </>
            }
        </Container>
    )
}