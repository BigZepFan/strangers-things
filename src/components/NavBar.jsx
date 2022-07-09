import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ profile }) {
  return (
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Posts">Posts</Link>
    </nav>
  );
}
