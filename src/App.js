import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import TodoWrapper from "./components/TodoWrapper";
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

    </div>
  );
}

export default App;
