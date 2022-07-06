import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import { fetchAllPosts } from "api/post";
import Post from "./posts";

const dummyPosts = [
  {
    Title: "98 Chevy",
    Description: "Piece of shit runs terrible",
    Price: 800,
    Location: "Utah",
  },
  {
    Title: "2001 Honda",
    Description: "Runs fantastic no problems",
    Price: 500,
    Location: "Utah",
  },
  {
    Title: "99 Ford",
    Description: "runs terrible",
    Price: 900,
    Location: "Utah",
  },
];

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const getAllThePosts = async () => {
    //   const result = await fetchAllPosts();
    //   setPosts(result);
    // };
    // getAllThePosts;

    setPosts(dummyPosts);
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        // return <post key={`Key: ${index}`} dog={dog} />;
        return <Post post={post} />;
      })}
    </div>
  );
}
