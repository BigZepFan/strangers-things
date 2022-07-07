import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ profile }) {
  return (
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Post">Post</Link>
      <Link to="/Profile">Profile</Link>
    </nav>
  );
}
