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

export async function createTodos(title, token, addTodo) {
  console.log(token);
  await axios
    .post(
      `https://todo-redev.herokuapp.com/api/todos`,
      {
        title: title,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      addTodo(res.data.title);
      console.log(res)
    })
    .catch((e) => {
      console.log(e);
    });
};

export async function updateTodo(newTodo, token, id) {
  await axios
    .patch(`https://todo-redev.herokuapp.com/api/todos/${id}`, newTodo, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
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

export async function deleteTodo(id, token) {
  await axios
    .delete(`https://todo-redev.herokuapp.com/api/todos/${id}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
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

//https://todo-redev.herokuapp.com/api-docs/