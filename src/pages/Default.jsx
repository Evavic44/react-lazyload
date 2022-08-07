import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/bird.jpg";

export default function Default() {
  return (
    <div className="container">
      <header>
        <h1>Default</h1>
        <p>No lazyload, just a plain image using the img tag</p>
        <Link to="/">Go back</Link>
      </header>

      <div className="card">
        <img
          className="image"
          src={Image}
          width={800}
          height={550}
          alt="Fishy"
        />
      </div>
    </div>
  );
}
