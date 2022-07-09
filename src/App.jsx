import Login from "components/Login";
import { useEffect, useState } from "react";
import { fetchMe } from "api/authorization";
import Register from "components/Register";
import { Route, Routes } from "react-router-dom";
import PostList from "components/PostList";
import CreatePost from "components/CreatePost";
import { createPost } from "api/post";
import EditPost from "components/Edit";
import Home from "components/Home";
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
        <Route path={"/Home"} element={<Home />} />
        <Route path={"/Login"} element={<Login setToken={setToken} />} />
        <Route path={"/Register"} element={<Register setToken={setToken} />} />
        <Route
          path={"/Posts"}
          element={<PostList currentUser={currentUser} token={token} />}
        />
        <Route path={"/CreatePost"} element={<CreatePost token={token} />} />
        <Route
          path={"/posts/:postId/edit"}
          element={<EditPost token={token} />}
        />
      </Routes>
      {currentUser?.username ? <h3>{currentUser.username}</h3> : null}
    </>
  );
}

/// send mesages and view messages// look at docs for sample calls/
