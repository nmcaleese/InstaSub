import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import SubPlanIndexPage from "../SubPlanIndexPage/SubPlanIndexPage";
import NewSubPlanPage from "../NewSubPlanPage/NewSubPlanPage";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />

          <Routes>
            <Route path="/subplan/index" element={<SubPlanIndexPage />} />
            <Route path="/subplan/new" element={<NewSubPlanPage />} />
            <Route path="/*" element={<Navigate to="/subplan/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
