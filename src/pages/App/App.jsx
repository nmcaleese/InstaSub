import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import SubPlanIndexPage from '../SubPlanIndexPage/SubPlanIndexPage'
import NewSubPlanPage from '../NewSubPlanPage/NewSubPlanPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {

  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {  user ? 
        <>
          {/* if there is an active sub plan. display that subplan. Otherwise, display, Create new Sub Plan?'' */}
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/subplan/index' element={<SubPlanIndexPage />} />
            <Route path='/subplan/new' element={<NewSubPlanPage />} />
          </Routes> 
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


