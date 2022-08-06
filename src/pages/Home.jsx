import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <header>
        <h1>React Lazysizes Example</h1>
        <p>
          Tutorial to illustrate image optimization in a react app using the NPM
          library:{" "}
          <a
            href="https://www.npmjs.com/package/react-lazy-load-image-component"
            target="_blank"
          >
            Lazy load Image Component
          </a>{" "}
          ↗
        </p>
      </header>

      <section>
        <Link className="link" to="/default">
          Default
        </Link>
        <Link className="link" to="/placeholder">
          Placeholder
        </Link>
        <Link className="link" to="/blur">
          Blur
        </Link>
      </section>

      <p>
        Prepared by{" "}
        <a href="https://github.com/evavic44" target="_blank">
          Victor Eke
        </a>
        ↗
      </p>
    </div>
  );
}

export default Home;
