const url = "http://localhost:3000";

export const createUser = async (user) => {
  const response = await fetch(`${url}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "applications/json",
    },
    body: JSON.stringify({
      name: user,
    }),
  });
  const result = await response.json();
  return result;
};
