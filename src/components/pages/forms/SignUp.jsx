import { useState } from "react";
import axios from "axios";
import ClassicInput from "../../UI/inputs/ClassicInput";
import FormBtn from "../../UI/buttons/FormBtn";

export default function SignUp({onFormSwitch}){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      console.log(name)
      // setData(data)
    }

    function validAge(age){
      typeof(age) !== 'number' && age < 0 ? alert('invalid age') : setAge(age)
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
            <ClassicInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Dinosaur"
              name="text"
            ></ClassicInput>
          </div>

          <div className="item">
            <div className="lab">
              <label type="text">
                <h3>username</h3>
              </label>
            </div>
            <ClassicInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Dino_saur_cream"
              name="text"
            ></ClassicInput>
          </div>

          <div className="item">
            <div className="lab">
              <label type="email">
                <h3>email</h3>
              </label>
            </div>
            <ClassicInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="dino_saur_cream@gmail.com"
              name="email"
            ></ClassicInput>
          </div>

          <div className="item">
            <div className="lab">
              <label type="password">
                <h3>password</h3>
              </label>
            </div>
            <ClassicInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="secret_info123"
              name="password"
            ></ClassicInput>
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
            <ClassicInput
              onChange={(e) => validAge(e.target.value)}
              value={age}
              type="text"
              placeholder="48"
            ></ClassicInput>
          </div>

          <FormBtn type="submit">Sign Up</FormBtn>
        </form>
        <FormBtn onClick={() => onFormSwitch("login")}>
          <h3>Already have an account? Log In!</h3>
        </FormBtn>
      </>
    );
}