import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'


//function to change state of activemodule to null when confirmation button is clicked 
    

export default function AddCIPage({setActiveModule}){


function addCI(){
    
        // setActiveModules to null to return to newSublessonpage
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