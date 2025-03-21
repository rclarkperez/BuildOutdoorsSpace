import React from "react";
import "../../style/PagesStyle/Home.css";
import VideoWindow from "../Video";
const Home = () => {
  return (
    <div id="home">
      <div className="ui center aligned container" id="text-box">
        <VideoWindow />
      </div>
    </div>
  );
};
export default Home;
