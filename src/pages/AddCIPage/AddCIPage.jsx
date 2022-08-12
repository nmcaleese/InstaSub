import { useState, useEffect } from 'react'
import ClassroomInstructions from '../../components/ClassroomInstructions/ClassroomInstructions'
import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'
import * as CIAPI from '../../utilities/classroomInstructions-api'

    

export default function AddCIPage({setActiveModule, setPopulatedModules, populatedModules}){

//modifies SubPlanPage with CI that has been added
function addCI(){
    const populatedModulesCopy = populatedModules
    populatedModulesCopy.splice(0, 1, 'title of CI')
        setPopulatedModules(populatedModulesCopy)
        setActiveModule(null)
    }

const [index, setIndex] = useState([])

function handleAdd(newCI){
    setIndex({...index, newCI})
}

const indexCIs = index.map(ci => <ClassroomInstructions ci={ci}/>)

useEffect( function(){
    async function getCIs() {
        const CIs = await CIAPI.getAll();
        console.log(CIs)
        setIndex(CIs)
    }
    getCIs()
}, [])


    return (
        <div>
            <CreateNewCIForm handleAdd={handleAdd}/>
            {indexCIs}
            <button onClick={()=> addCI()} >Add CI to lesson plan?</button>
        </div>
    )
}