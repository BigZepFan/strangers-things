import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ profile }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
