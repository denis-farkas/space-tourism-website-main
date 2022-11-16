import Navigation from "../Navigation";
import "./header.css";
import "./header_tablet.css";
import "./header_mobile.css";

const Header = () => {
  function myFunction() {
    const x = document.getElementById("topnav");
    const back = document.getElementById("back");
    if (x.className === "topnav") {
      back.classList.remove("notVisible");
      back.className += " visible";
      x.className += " responsive";
    } else {
      back.classList.remove("visible");
      back.className += " notVisible";
      x.className = "topnav";
    }
  }

  return (
    <>
      <div className="header">
        <div className="background" id="back"></div>
        <div className="header-left">
          <img src="assets/shared/logo.svg" alt="logo" />
          <div className="header-line"></div>
        </div>
        <div className="topnav" id="topnav">
          <div className="navbar">
            <img
              className="close-mobile"
              src="assets/shared/icon-close.svg"
              alt="close mobile"
              tabIndex={4}
              onClick={myFunction}
            />
            <Navigation />
          </div>
        </div>
        <img
          className="menu-mobile"
          src="assets/shared/icon-hamburger.svg"
          alt="menu mobile"
          tabIndex={0}
          onClick={myFunction}
        />
      </div>
    </>
  );
};

export default Header;
