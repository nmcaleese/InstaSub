import CreateNewCIForm from '../../components/CreateNewCIForm/CreateNewCIForm'

export default function AddCIPage({setPopulatedModules}){
    return (
        <div><button onClick={() => console.log('click should load CreateNewCIForm')}>Create new Classroom Instructions Mod</button>
        <h1>this will be a list of previous CI's</h1>
    </div>
    )
}