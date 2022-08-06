import React from "react";
import { Link } from "react-router-dom";

export default function Unresponsive() {
  return (
    <>
      <header>
        <h1>Unresponsive Image</h1>
        <p>Scroll down to see the effect</p>
        <Link to="/">Go back</Link>
      </header>
      <main>
        <article className="unresponsive card">
          <img src="desktop.jpg" />
          <div className="card-content">
            <h2>Resize your browser to see the effect.</h2>
            <p>
              Ichigo Kurosaki never asked for the ability to see ghosts; he was
              born with the gift. When his family is attacked by a Hollow
              (malevolent lost soul), Ichigo becomes a Soul Reaper, dedicating
              his life to protecting the innocent and helping the tortured.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
