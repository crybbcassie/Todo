import axios from 'axios'

export async function register(userRegisterData){
    await axios
      .post(
        `https://first-node-js-app-r.herokuapp.com/api/users/register`,
        userRegisterData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
}

export async function login(userLoginData) {
  await axios
    .post(
      `https://first-node-js-app-r.herokuapp.com/api/auth/login`,
      userLoginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((token) => {
      console.log(token);
    })
    .catch((e) => {
      console.log(e);
    });
}