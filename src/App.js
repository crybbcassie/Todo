import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
// import { AuthContext } from "./context/Context";
import { useState } from "react";


function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
   
      <div className="App">
        {/* <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth,
        }}
      > */}
        <Navigation />
        {/* </AuthContext.Provider> */}
      </div>
  );
}

export default App;
