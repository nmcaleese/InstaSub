import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'

export default function AddCIPage({setActiveModule}){
    return (
        <div>
            <CreateNewCIForm setActiveModule={setActiveModule}/>
            <h1>this will be a list of previous CI's</h1>
        </div>
    )
}