import React from "react";

import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  console.log(post);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`posts/${post.id}`);
      }}
    >
      <ul>
        <li>Title: {post.Title} </li>
        <li>Description: {post.Description} </li>
        <li>Price: {post.Price} </li>
        <li>Location: {post.Location} </li>
      </ul>
    </div>
  );
}
