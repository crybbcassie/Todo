import axios from 'axios'

export async function login(userLoginData, navigate, updateToken) {
  const loginUrl = process.env.REACT_APP_URL_LOGIN
  try {
    const result = await axios.post(
      loginUrl,
      userLoginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("token", result.data.token);
    updateToken(result.data.token);
    navigate("/Todos");
  } catch (e) {
    alert(e.response.data.message);
  }
}

export async function register(userRegisterData, changePage) {
  const registerUrl = process.env.REACT_APP_URL_REGISTER
  try {
    await axios.post(registerUrl, userRegisterData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    changePage();
  } catch (e) {
    alert(e.response.data.errors.map((er) => er.msg));
  }
}