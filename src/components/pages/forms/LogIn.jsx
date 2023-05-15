import { useState } from "react";
import ClassicInput from "../../UI/inputs/ClassicInput";
import FormBtn from "../../UI/buttons/FormBtn";

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
            placeholder="secret_info123"
            id="password"
            name="password"
          ></ClassicInput>

          <FormBtn type="submit">
            Log In
          </FormBtn>
        </form>
        <FormBtn onClick={() => onFormSwitch("register")}>
          <h3>Don't have an account? Sign Up!</h3>
        </FormBtn>
      </>
    );
}