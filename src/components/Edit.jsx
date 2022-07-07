import React, { useState } from "react";
import { editPost } from "api/post";
import { useParams } from "react-router-dom";
export default function EditPost({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const params = useParams();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await editPost(
            token,
            {
              title,
              description,
              price,
              location,
            },
            params.postId
          );
          console.log(result);
        }}
      >
        <input
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}
