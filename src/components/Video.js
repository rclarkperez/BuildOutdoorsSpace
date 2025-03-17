import React from "react";
import "../style/ComponentStyle/Video.css";

const VideoWindow = () => (
  <div className="video-container" controls>
    <div class="overlay-content">
      <h1 id="text" className="ui center aligned container">
        Excavations, Demolitions, Land Clearing, Sewage, Retaining Walls and
        More!
      </h1>

      <h2 id="text" className="ui center aligned container">
        We serve the Southwest Washington and the Portland metro area. Call
        today for a free consultation!
      </h2>
      <h3 id="text" className="ui center aligned container">
        <a href="tel:(360) 907-1509"> (360) 907-1509 </a>
      </h3>
      <br />
      <br />
      <div class="iframe-blur-container">
        <div class="blur-background"></div>
      </div>
      <iframe
        id="excavationVideo"
        src="https://www.youtube.com/embed/B_qiquHUOhA?autoplay=1&loop=1&mute=1&controls=0&playlist=B_qiquHUOhA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        pointerEvents="none"
      ></iframe>
    </div>
  </div>
);

export default VideoWindow;
