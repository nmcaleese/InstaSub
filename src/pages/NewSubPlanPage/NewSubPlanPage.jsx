import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage"
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage"
import AddGIPage from "../AddGIPage/AddGIPage"
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage"


export default function NewSubPlanPage(){
    return (
    <div>
        <h1>new sub plan page</h1>
        < AddGIPage />
        < AddFirstFivePage />
        < AddLessonPlanPage />
        < AddExitTicketPage />
        
    </div>
    
    )
}