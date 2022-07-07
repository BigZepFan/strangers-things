import React from "react";
import CreatePost from "./CreatePost";

import { useNavigate } from "react-router-dom";

export default function Post({ post, currentUser }) {
  console.log(post);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`${post._id}`);
      }}
    >
      Hello from posts
      <ul>
        <li>Title: {post.title} </li>
        <li>Description: {post.description} </li>
        <li>Price: {post.price} </li>
        <li>Location: {post.location} </li>
      </ul>
      {/**
       * If the current user's _id === post.author._id then you can render a
       * delete button, and edit button, which will fire an api helper function to hit the
       * appropriate api endpoint
       *
       * TERNARY OPERATORS:
       *  someValue ? <thiswillhappeniftrue /> : thisiffalse
       */}
      {currentUser._id === post.author._id ? <button>delete</button> : null}
    </div>
  );
}
