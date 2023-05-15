import './App.css';
import LogIn from './components/forms/LogIn';
import SignUp from './components/forms/SignUp';
import TodoWrapper from "./components/todo/TodoWrapper";
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
