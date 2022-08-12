import { useState } from 'react'
import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'


    

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

// CANNOT GET AN INDEX UNTIL INFO IS IN THE DATABASE
    // useEffect(async function(){
//     const CIs = await classroomInstructionsAPI.getAll();
//     console.log(CIs)
// })


    return (
        <div>
            <CreateNewCIForm />
            
            <h1>this will be a list of previous CI's</h1>
            <button onClick={()=> addCI()} >Add CI to lesson plan?</button>

        </div>
    )
}