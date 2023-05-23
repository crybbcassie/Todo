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

export async function createTodos(token, todo) {
  await axios
    .post(`https://first-node-js-app-r.herokuapp.com/api/todos`, todo, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((e) => {
      console.log(e);
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function updateTodo(newTodo, token, id) {
  await axios.patch(
    `https://first-node-js-app-r.herokuapp.com/api/todos/${id}`,
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

export async function deleteTodo(id, token) {
  await axios.delete(
    `https://first-node-js-app-r.herokuapp.com/api/todos/${id}`,
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  )
}