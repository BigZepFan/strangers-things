import React from "react";
import CreatePost from "./CreatePost";
import { useNavigate, Link } from "react-router-dom";
import { deletePost } from "api/post";

export default function Post({ post, currentUser, token, posts, setPosts }) {
  console.log(post);
  const navigate = useNavigate();

  return (
    <div>
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
      {currentUser._id === post.author._id ? (
        <div>
          {" "}
          <button
            onClick={async () => {
              await deletePost(post._id, token);
              const filteredPosts = posts.filter((singlePost) => {
                if (post._id === singlePost._id) {
                  return false;
                } else {
                  return true;
                }
              });
              setPosts(filteredPosts);
              // fire your delete post API function (make sure you pass it the correct args)
              // if the post isnt deteled from your application
              // 1. Pass posts and setPosts into this component
              // 2. Filter through your posts with posts.filter()
              // if the post your at has an id that matches the post you have deleted,
              //  remove it with your filter method
              // 3. setPosts(filteredPosts)

              //posts = { posts }, setPosts = { setPosts }
            }}
          >
            {" "}
            delete{" "}
          </button>
          <Link to={`/posts/${post._id}/edit`}>Edit</Link>{" "}
        </div>
      ) : null}
    </div>
  );
}
