import { useState, useEffect } from 'react'
import ClassroomInstructions from '../../components/ClassroomInstructions/ClassroomInstructions'
import ViewCIForm from '../../components/ViewCIForm/ViewCIForm'
import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'
import * as CIAPI from '../../utilities/classroomInstructions-api'

    

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
    console.log(deletedCIId)
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
        <div> 
            { activeCI ? 
            <div>
                {activeCI}
            </div>
            :
            <div>
                <CreateNewCIForm handleAdd={handleAdd}/>
                {indexCIs}
                </div>
            }
        </div>
    )
}