const registerUser = async (user) => {
  console.log(user);
  const res = await fetch("http://localhost:5000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  return data;
};

const loginUser = async (user) => {
  const res = await fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  localStorage.setItem("user", JSON.stringify(data.token));

  return data;
};

const getUserViaToken = async () => {
  const token = JSON.parse(localStorage.getItem("user"));

  const res = await fetch("http://localhost:5000/api/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data;
};

const authService = {
  registerUser,
  loginUser,
  getUserViaToken,
};

export default authService;
