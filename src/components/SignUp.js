import { useState } from "react";
import LogIn from "./LogIn";

export default function SignUp(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
    }

    return (
      <>
        <form className="TodoForm TodoWrapper" onSubmit={handleSubmit}>
          <div className="item">
            <div className="lab">
              <lable type="text">
                <h3>name</h3>
              </lable>
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Dinosaur"
              className="todo-input"
              id="text"
              name="text"
            ></input>
          </div>

          <div className="item">
            <div className="lab">
              <lable type="text">
                <h3>username</h3>
              </lable>
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Dino_saur_cream"
              className="todo-input"
              id="text"
              name="text"
            ></input>
          </div>

          <div className="item">
            <div className="lab">
              <lable type="email">
                <h3>email</h3>
              </lable>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="dino_saur_cream@gmail.com"
              className="todo-input"
              id="email"
              name="email"
            ></input>
          </div>

          <div className="item">
            <div className="lab">
              <lable type="password">
                <h3>password</h3>
              </lable>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="secret_info123"
              className="todo-input"
              id="password"
              name="password"
            ></input>
          </div>

          <div className="item">
            <div className="lab lab-gen">
              <lable type="text">
                <h3>gender</h3>
              </lable>
            </div>
            <div className="con-gen">
              <div class="radio">
                <div class="radio-item item-1">
                  <input
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    id="fid-1"
                    type="radio"
                    name="radio"
                    checked
                  ></input>
                  <label for="fid-1">Male</label>
                </div>
                <div class="radio-item item-2">
                  <input
                    id="fid-2"
                    type="radio"
                    name="radio"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  ></input>
                  <label for="fid-2">Female</label>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="lab">
              <lable type="text">
                <h3>age</h3>
              </lable>
            </div>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="text"
              placeholder="48"
              className="todo-input"
              id="text"
              name="text"
            ></input>
          </div>

          <button type="submit" className="form-btn nav-btn">
            Sign Up
          </button>
        </form>
        <button className="form-btn link">
          <h3>Already have an account? Log In!</h3>
        </button>
      </>
    );
}