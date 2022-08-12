import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'


    

export default function AddCIPage({setActiveModule, setPopulatedModules, populatedModules}){


function addCI(){
    const populatedModulesCopy = populatedModules
    populatedModulesCopy.splice(0, 1, 'title of CI')
        setPopulatedModules(populatedModulesCopy)
        setActiveModule(null)
    }
    return (
        <div>
            <CreateNewCIForm />
            <h1>this will be a list of previous CI's</h1>
            <button onClick={()=> addCI()} >Add CI to lesson plan?</button>
        </div>
    )
}