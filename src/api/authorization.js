import Register from "components/login";

const url = "https://strangers-things.herokuapp.com/api/2206-FTB-MT-WEB-FT/";

export const registerUser = async (username, password) => {
  const response = await fetch(`${url / user / Register}`, {
    method: "POST",
    headers: {
      "Content-Type": "applications/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  });
  const result = await response.json();
  return result;
};
// TESTING ↓
export const loginUser = async (username, password) => {
  const response = await fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "applications/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
  // TESTING ↑
  const result = await response.json();
  return result;
};

export const fetchMe = async (token) => {
  const response = await fetch(`${url}/user/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};
