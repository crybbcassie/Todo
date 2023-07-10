import { useState } from "react";
import ClassicInput from "../../UI/inputs/ClassicInput";
import FormBtn from "../../UI/buttons/FormBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp({onFormSwitch}){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
    }

    const validAge = (num) => {
      return (typeof num !== 'number' && age < 0)? '' : num
    }

    const userRegisterData = {
      username: username,
      email: email,
      password: password,
      gender: gender,
      age: age,
    };

    const navigate = useNavigate()

   function changePage() {
     onFormSwitch("login");
      navigate("/Todo");
   }

 async function register(userRegisterData) {
  await axios
    .post(
      `https://todo-redev.herokuapp.com/api/users/register`,
      userRegisterData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
      changePage();
    })
    .catch((e) => {
      alert(
        e.response.data.errors.map((er) => (er.msg))
      );
    });
}
    
    return (
      <>
        <form className="TodoForm TodoWrapper" onSubmit={handleSubmit}>
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
              placeholder="secret_Info123"
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
                    value="male"
                    onChange={() => setGender("male")}
                    id="male"
                    type="radio"
                    name="radio"
                    checked={gender === "male"}
                  ></input>
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-item item-2">
                  <input
                    id="female"
                    type="radio"
                    name="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  ></input>
                  <label htmlFor="female">Female</label>
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
              onChange={(e) => validAge(setAge(e.target.value))}
              value={age}
              placeholder="48"
            ></ClassicInput>
          </div>

          <FormBtn onClick={() => register(userRegisterData)} type="submit">
            Sign Up
          </FormBtn>
        </form>
        <FormBtn onClick={() => changePage()}>
          <h3>Already have an account? <span>Log In!</span></h3>
        </FormBtn>
      </>
    );
}