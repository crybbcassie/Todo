import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {TodoWrapper, LogIn, SignUp } from '../pages/index';
import { useState } from "react";

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
        <Route path="/Todos" element={<TodoWrapper />} exact={true} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        {currName === "login" ? (
          <Route
            path="/Todo"
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