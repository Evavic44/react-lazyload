import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/bird.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Default() {
  return (
    <div className="container">
      <header>
        <h1>Default</h1>
        <p>Lazyload by default, without any effects</p>
        <Link to="/">Go back</Link>
      </header>

      <div className="card">
        <LazyLoadImage
          className="image"
          src={Image}
          width={800}
          height={550}
          alt="bird"
        />
      </div>
    </div>
  );
}
