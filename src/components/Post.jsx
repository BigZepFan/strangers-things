import React, { useState } from "react";
import CreatePost from "./CreatePost";
import { useNavigate, Link } from "react-router-dom";
import { deletePost, sendMessage } from "api/post";

export default function Post({ post, currentUser, token, posts, setPosts }) {
  console.log("post from jsx", post);
  const navigate = useNavigate();
  // export default function Post({ post, currentUser, token, posts, message})

  const [messageContent, setMessageContent] = useState("");

  return (
    <div>
      <form>
        Posts:
        <ul>
          <li>Title: {post.title} </li>
          <li>Description: {post.description} </li>
          <li>Price: {post.price} </li>
          <li>Location: {post.location} </li>
        </ul>
        <input
          placeholder="Message here:"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <button
          onClick={async () => {
            await sendMessage(post._id, token, messageContent);
            const filteredPosts = posts.filter((singlePost) => {
              // // if (post._id === singlePost._id) {
              // //   return false;
              // // } else {
              // //   return true;
              // }
            });
          }}
        >
          Send Message
        </button>
        {/**
       * If the current user's _id === post.author._id then you can render a
       * delete button, and edit button, which will fire an api helper function to hit the
       * appropriate api endpoint
       *
       * TERNARY OPERATORS:
       *  someValue ? <thiswillhappeniftrue /> : thisiffalse
//  */}
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
              }}
            >
              {" "}
              delete{" "}
            </button>
            <Link to={`/posts/${post._id}/edit`}>Edit</Link>{" "}
          </div>
        ) : null}
      </form>
    </div>
  );
}

// fire your delete post API function (make sure you pass it the correct args)
// if the post isnt deteled from your application
// 1. Pass posts and setPosts into this component
// 2. Filter through your posts with posts.filter()
// if the post your at has an id that matches the post you have deleted,
//  remove it with your filter method
// 3. setPosts(filteredPosts)

//posts = { posts }, setPosts = { setPosts }
