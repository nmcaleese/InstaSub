import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import SubPlanIndexPage from '../SubPlanIndexPage/SubPlanIndexPage'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {

  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {  user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/subplan/index' element={<SubPlanIndexPage />} />
          </Routes> 
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


