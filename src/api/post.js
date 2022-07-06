const url =
  "https://strangers-things.herokuapp.com/api/2206-FTB-MT-WEB-FT/posts";

export const fetchAllPosts = async () => {
  const response = await fetch(`${url}/api/posts`);
  const result = await response.json();
  return result;
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${url}/api/posts/${id}`);
  const result = await response.json();
  return result;
};
export const createPost = async (token, postObj) => {
  const response = await fetch(`${url}/api/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postObj),
  });
  const result = await response.json();
  return result;
};
