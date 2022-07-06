import Login from "components/login";
import { useEffect, useState } from "react";
import { fetchMe } from "api/authorization";
import Register from "components/register";
import { Route, Routes } from "react-router-dom";
import PostList from "components/postList";
export default function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    async function getMe() {
      const result = await fetchMe(localStorageToken);
      console.log("result from fetch me", result);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  console.log("The current user is:", currentUser);

  return (
    <>
      <Routes>
        <Route path={"/login"} element={<Login setToken={setToken} />} />
        <Route path={"/register"} element={<Register setToken={setToken} />} />
        <Route path={"/postList"} element={<PostList />} />
      </Routes>
      {currentUser?.username ? <h3>{currentUser.username}</h3> : null}
    </>
  );
}
