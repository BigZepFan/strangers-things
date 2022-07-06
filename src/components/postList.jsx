import React, { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import { fetchAllPosts } from "api/post";

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

export default function CreatePost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllThePosts = async () => {
      const result = await fetchAllPosts();
      setPosts(result);
    };
    getAllThePosts;
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        return <post key={`Key: ${index}`} dog={dog} />;
      })}
    </div>
  );
}
