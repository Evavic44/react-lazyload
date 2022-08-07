import React from "react";

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
        <a className="link" href="/default">
          Default
        </a>
        <a className="link" href="/placeholder">
          Placeholder
        </a>
        <a className="link" href="/blur">
          Blur
        </a>
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
