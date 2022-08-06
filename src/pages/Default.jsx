import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/bird.jpg";

export default function Default() {
  return (
    <div className="container">
      <header>
        <h1>Lazyload Effect</h1>
        <p>This is an illustration of the lazyload effect by default.</p>
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
