import axios from 'axios'

export async function register(userRegisterData, f){
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
        console.log(res)
        f()
      })
      .catch((e) => {
        alert(e.response.statusText)
      });
}

export async function login(userLoginData, navigate, updateToken) {
  await axios
    .post(`https://todo-redev.herokuapp.com/api/auth/login`, userLoginData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      updateToken(res.data.token);
      navigate()
    })
    .catch((e) => {
      alert(e.response.data.message);
    })
}

//https://todo-redev.herokuapp.com/api-docs/