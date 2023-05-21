import axios from 'axios'

export async function register(){
    await axios
      .post(
        `https://first-node-js-app-r.herokuapp.com/api/users/register`,
        {
          name: "Mafeegsfwfwsha",
          username: "magegrrfefwy22",
          email: "examfgseefefeple@example.com",
          password: "1Sq_22qw",
          isMan: true,
          age: 25,
        },
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

export async function login(){
    await axios
      .post(
        `https://first-node-js-app-r.herokuapp.com/api/auth/login`,
        {
          email: "vlad8@mail.ru",
          password: "Hello_34",
        },
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