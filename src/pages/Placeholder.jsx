import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../images/bird.jpg";
import PlaceholderImage from "../images/bird-placeholder.jpg";

export default function Placeholder() {
  return (
    <div className="container">
      <header>
        <h1>Placeholder</h1>
        <p>
          This is an illustration of the lazyload effect with a placeholder
          image
        </p>
        <Link to="/">Go back</Link>
      </header>
      <div className="card">
        <LazyLoadImage
          src={Image}
          width={800}
          height={500}
          placeholderSrc={PlaceholderImage}
          alt="bird"
        />
      </div>
    </div>
  );
}
