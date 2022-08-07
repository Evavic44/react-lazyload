import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../images/bird.jpg";
import PlaceholderImage from "../images/placeholder.jpg";

export default function Blur() {
  return (
    <div className="container">
      <header>
        <h1>Blur</h1>
        <p>Lazyload effect with a placeholder image and blur effect</p>
        <p>
          To see the effects, disable cache and set throttling to 3G and refresh
          the page.
        </p>
        <Link to="/">Go back</Link>
      </header>

      <div className="card">
        <LazyLoadImage
          src={Image}
          width={800}
          height={530}
          placeholderSrc={PlaceholderImage}
          effect="blur"
          alt="image"
        />
      </div>
    </div>
  );
}
