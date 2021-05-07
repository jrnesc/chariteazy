const baseUrl = "http://127.0.0.1:8000/api/v1";

const login = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  const res = await fetch(`http://127.0.0.1:8000/api/v1/login/`, requestOptions);
  const data = await res.json();

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