import './App.css';
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import SubPlanIndexPage from '../SubPlanIndexPage/SubPlanIndexPage'
import NewSubPlanPage from '../NewSubPlanPage/NewSubPlanPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {

  const [ user, setUser ] = useState(getUser())

  //add a useState function for whether they are creating a new subPlan. if they are toggle usestate to true and have app.js show the create page

  return (
    <main className="App">
      {/* ternary list:
      1. is there an active user? 
          YES: */}
      {  user ? 
      <>
        <NavBar user={user} setUser={setUser}/>
          {/* 2. is there an active sub plan in  the state?
            yes: display that sub plan

            no: display message "add an old plan or create a new one"
              3. Is SubPlanIndex toggled on?
                  YES: Display SubPlanIndex

                  NO: Display NewSubPlanPage */}
            
          <Routes>
            <Route path='/subplan/index' element={<SubPlanIndexPage />} />
            <Route path='/subplan/new' element={<NewSubPlanPage />} />
            <Route path='/*' element={<Navigate to="/subplan/new" />} />
          </Routes> 
        </>
        // 1.No: display auth page
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


