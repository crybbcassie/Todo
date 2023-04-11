import { useState } from "react";
import SignUp from "./SignUp";

export default function LogIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
      <>
        <form className="TodoForm TodoWrapper" onSubmit={handleSubmit}>
          <lable type="email">
            <h3>email</h3>
          </lable>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="dino_saur_cream@gmail.com"
            className="todo-input"
            id="email"
            name="email"
          ></input>

          <lable type="password">
            <h3>password</h3>
          </lable>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="secret_info123"
            className="todo-input"
            id="password"
            name="password"
          ></input>

          <button type="submit" className="form-btn nav-btn">
            Log In
          </button>
        </form>
        <button className="form-btn link">
          <h3>Don't have an account? Sign Up!</h3>
        </button>
      </>
    );
}