import './App.css';
import LogIn from './components/pages/forms/LogIn';
import SignUp from "./components/pages/forms/SignUp";
import TodoWrapper from "./components/pages/todo/TodoWrapper";
import { useState } from 'react';

function App() {
  const [currName, setCurrName] = useState('login')

  function toggleForm(formName){
    setCurrName(formName)
  }

  return (
    <div className="App">
      {currName === 'login' ? 
      <LogIn onFormSwitch={toggleForm}/> : <SignUp onFormSwitch={toggleForm}/>}      
      <TodoWrapper/>
    </div>
  );
}

export default App;
