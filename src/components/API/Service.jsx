import axios from 'axios'

export async function register(userRegisterData){
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
      })
      .catch((e) => {
        console.log(e);
      });
}

export async function login(userLoginData) {
  await axios
    .post(`https://todo-redev.herokuapp.com/api/auth/login`, userLoginData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((token) => {
      console.log(token);
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function createTodos(token, todo) {
  await axios
    .post(``, todo, {
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
    `${id}`,
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
    `${id}`,
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }
  )
}