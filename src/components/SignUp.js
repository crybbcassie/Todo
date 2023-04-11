import { useState } from "react";
import LogIn from "./LogIn";

export default function SignUp({onFormSwitch}){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
    }

    function validAge(e){
      typeof(e) !== 'number' && e < 0 ? setAge('invalid age') : setAge(e)
    }

    return (
      <>
        <form className="TodoForm TodoWrapper" onSubmit={handleSubmit}>
          <div className="item">
            <div className="lab">
              <label type="text">
                <h3>name</h3>
              </label>
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Dinosaur"
              className="todo-input"
              name="text"
            ></input>
          </div>

          <div className="item">
            <div className="lab">
              <label type="text">
                <h3>username</h3>
              </label>
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Dino_saur_cream"
              className="todo-input"
              name="text"
            ></input>
          </div>

          <div className="item">
            <div className="lab">
              <label type="email">
                <h3>email</h3>
              </label>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="dino_saur_cream@gmail.com"
              className="todo-input"
              name="email"
            ></input>
          </div>

          <div className="item">
            <div className="lab">
              <label type="password">
                <h3>password</h3>
              </label>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="secret_info123"
              className="todo-input"
              name="password"
            ></input>
          </div>

          <div className="item">
            <div className="lab lab-gen">
              <label type="text">
                <h3>gender</h3>
              </label>
            </div>
            <div className="con-gen">
              <div className="radio">
                <div className="radio-item item-1">
                  <input
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    id="fid-1"
                    type="radio"
                    name="radio"
                    checked
                  ></input>
                  <label htmlFor="fid-1">Male</label>
                </div>
                <div className="radio-item item-2">
                  <input
                    id="fid-2"
                    type="radio"
                    name="radio"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  ></input>
                  <label htmlFor="fid-2">Female</label>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="lab">
              <label type="text">
                <h3>age</h3>
              </label>
            </div>
            <input
              onChange={(e) => validAge(e.target.value)}
              value={age}
              type="text"
              placeholder="48"
              className="todo-input"
            ></input>
          </div>

          <button type="submit" className="form-btn nav-btn">
            Sign Up
          </button>
        </form>
        <button className="form-btn link" onClick={() => onFormSwitch('login')}>
          <h3>Already have an account? Log In!</h3>
        </button>
      </>
    );
}