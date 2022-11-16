import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import "./navigation_tablet.css";
import "./navigation_mobile.css";

const Navigation = () => {
  return (
    <div className="navbar-nav">
      <NavLink
        to={`/`}
        className={(nav) => (nav.isActive ? "nav active" : "nav")}
      >
        <p className="nav-text">
          <span className="num-bold">00</span>HOME
        </p>
      </NavLink>
      <NavLink
        to={`/destination`}
        className={(nav) => (nav.isActive ? "nav active" : "nav")}
      >
        <div className="nav-text">
          <span className="num-bold">01</span>DESTINATION
        </div>
      </NavLink>
      <NavLink
        to={`/crew`}
        className={(nav) => (nav.isActive ? "nav active" : "nav")}
      >
        <div className="nav-text">
          <span className="num-bold">02</span>CREW
        </div>
      </NavLink>
      <NavLink
        to={`/technology`}
        className={(nav) => (nav.isActive ? "nav active" : "nav")}
      >
        <div className="nav-text">
          <span className="num-bold">03</span>TECHNOLOGY
        </div>
      </NavLink>
    </div>
  );
};

export default Navigation;
