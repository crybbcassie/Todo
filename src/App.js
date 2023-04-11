import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import TodoWrapper from "./components/TodoWrapper";
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('login')
  return (
    <div className="App">
      {/* {value !== 'login' ? 
      <LogIn/> : <SignUp/>}       */}
      <LogIn />  
      <SignUp />
      <TodoWrapper/>
    </div>
  );
}

export default App;
