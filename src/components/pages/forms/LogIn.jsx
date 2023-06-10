import { useState } from "react";
import ClassicInput from "../../UI/inputs/ClassicInput";
import FormBtn from "../../UI/buttons/FormBtn";
import { login } from "../../API/Service";
import { useNavigate } from "react-router-dom";

export default function LogIn({onFormSwitch, updateToken}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const userLoginData ={
      email: email,
      password: password
    }

    console.log(userLoginData)

    function handleSubmit(e){
        e.preventDefault()
    }

    const navigate = useNavigate()

    function nav(){
      navigate('/Todo')
    }

    function changePage(){
      onFormSwitch('register')
      navigate('/SignUp')
    }

    return (
      <>
        <form className="TodoForm TodoWrapper" onSubmit={handleSubmit}>
          <label type="email">
            <h3>email</h3>
          </label>
          <ClassicInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="dino_saur_cream@gmail.com"
            id="email"
            name="email"
          ></ClassicInput>

          <label type="password">
            <h3>password</h3>
          </label>
          <ClassicInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="secret_Info123"
            id="password"
            name="password"
          ></ClassicInput>

          <FormBtn onClick={() => login(userLoginData, nav, updateToken)} type="submit">
            Log In
          </FormBtn>
        </form>
        <FormBtn onClick={() => changePage()}>
          <h3>Don't have an account? Sign Up!</h3>
        </FormBtn>
      </>
    );
}