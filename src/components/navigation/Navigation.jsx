import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'
import TodoWrapper from '../pages/todo/TodoWrapper'
import LogIn  from '../pages/forms/LogIn'
import SignUp from '../pages/forms/SignUp'
import { useContext, useState } from "react";

export default function Navigation() {
  const [token, setToken] = useState(localStorage.getItem("token"))

   const updateToken = (newToken) => {
     setToken(newToken);
   };

  const [currName, setCurrName] = useState("login");

  function toggleForm(formName) {
    setCurrName(formName);
  }

  return token ? (
    <BrowserRouter>
      <Routes>
        <Route path="/Todo" element={<TodoWrapper />} exact={true} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        {currName === "login" ? (
          <Route
            path="/LogIn"
            element={
              <LogIn onFormSwitch={toggleForm} updateToken={updateToken} />
            }
            exact={true}
          />
        ) : (
          <Route
            path="/SignUp"
            element={<SignUp onFormSwitch={toggleForm} />}
            exact={true}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}