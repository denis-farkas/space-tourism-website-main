import React from "react";
import Header from "../../components/Header";
import "./home.css";
import "./home-tablet.css";
import "./home-mobile.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home">
      <Header />
      <div className="container-body">
        <div className="text-content">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <div className="body-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="explore-content">
          <NavLink to={`/destination`}>
            <button className="explore">EXPLORE</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
