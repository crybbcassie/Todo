import { useState } from "react";

export default function LogIn({onFormSwitch}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
      <>
        <form className="TodoForm TodoWrapper" onSubmit={handleSubmit}>
          <label type="email">
            <h3>email</h3>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="dino_saur_cream@gmail.com"
            className="todo-input"
            id="email"
            name="email"
          ></input>

          <label type="password">
            <h3>password</h3>
          </label>
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
        <button className="form-btn link" onClick={() => onFormSwitch('register')}>
          <h3>Don't have an account? Sign Up!</h3>
        </button>
      </>
    );
}