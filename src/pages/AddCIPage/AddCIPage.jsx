import { useState, useEffect } from 'react'
import ClassroomInstructions from '../../components/ClassroomInstructions/ClassroomInstructions'
import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'
import * as CIAPI from '../../utilities/classroomInstructions-api'

    

export default function AddCIPage({setActiveModule, setPopulatedModules, populatedModules}){

//modifies SubPlanPage with CI that has been added
function addCI(CI){
    const populatedModulesCopy = populatedModules
    populatedModulesCopy.splice(0, 1, CI)
        setPopulatedModules(populatedModulesCopy)
        //function that adds CI object to 
        setActiveModule(null)
    }


async function viewCI(CI){
    const viewCI = await CIAPI.viewCI(CI._id)
    console.log(viewCI)
    //set viewCI to active State and continue the same way as with newSubplan
}


const [index, setIndex] = useState([])

function handleAdd(newCI){
    setIndex([...index, newCI])
}

const indexCIs = index.map(CI => <ClassroomInstructions CI={CI} key={CI._id} addCI={addCI} viewCI={viewCI}/>)

useEffect( function(){
    async function getCIs() {
        const CIs = await CIAPI.getAll();
        setIndex(CIs)
    }
    getCIs()
}, [])

    return (
        <div> 
            <CreateNewCIForm handleAdd={handleAdd}/>
            {indexCIs}
        </div>
    )
}