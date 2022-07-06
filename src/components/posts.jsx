import React from "react";

import { useNavigate } from "react-router-dom";

export default function posts({ post }) {
  console.log(post);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`posts/${post.id}`);
      }}
    >
      <ul>
        <li>Title: {post.title} </li>
        <li>Description: {post.description} </li>
        <li>Price: {post.price} </li>
        <li>Location {post.location} </li>
      </ul>
    </div>
  );
}
