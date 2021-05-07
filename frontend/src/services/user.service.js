import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
// options doesnt work
// const cookie_options = {sameSite:'lax',
//                         httpOnly:true}

const baseUrl = "http://127.0.0.1:8000/api/v1";

const login = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  const res = await fetch(`http://127.0.0.1:8000/api/v1/login/`, requestOptions);
  const data = await res.json();
  console.log(data)
  cookies.set('my-app-auth',data.access_token,{sameSite:'lax',maxAge:86400}) // cookie_options
  cookies.set('my-refresh-token',data.refresh_token,{sameSite:'lax',maxAge:86400})
  return data;
};

const logout = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  const res = await fetch(`http://127.0.0.1:8000/api/v1/logout/`, requestOptions);
  const data = await res.json();

  return data;
};

const register = async (username, password1, password2) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password1, password2 }),
  };

  const res = await fetch(`http://127.0.0.1:8000/api/v1/registration/`, requestOptions);
  const data = await res.json();
  return data;
};

export { login, logout, register };