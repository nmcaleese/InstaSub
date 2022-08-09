import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'

export default function AddCIPage({setPopulatedModules, idx, populatedModules, setActiveModule}){
    return (
        <div>
            <CreateNewCIForm setPopulatedModules={setPopulatedModules} populatedModules={populatedModules} idx={0} setActiveModule={setActiveModule}/>
            <h1>this will be a list of previous CI's</h1>
        </div>
    )
}