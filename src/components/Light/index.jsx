import { useState } from "react";
import data from "../../data/data.json";
import "./light.css";
import "./light-tablet.css";
import "./light-mobile.css";

export default function Lights() {
  const [currentLight, setCurrentLight] = useState(0);
  const buttonList = [0, 1, 2, 3];

  return (
    <>
      {data.crew.map((light, i) => {
        if (currentLight === i) {
          return (
            <div key={i} id={i} className="crew-content">
              <div className="crew-left">
                <div className="crew-title">
                  <h5>
                    <span className="gris">02</span>MEET YOUR CREW
                  </h5>
                </div>
                <div className="crew-role">{light.role}</div>
                <div className="crew-name">{light.name}</div>
                <div className="body-text">{light.bio}</div>
                <div className="crew-selector">
                  {buttonList.map((button, j) => {
                    if (button === i) {
                      return (
                        <button key={j} className="button-active"></button>
                      );
                    } else {
                      return (
                        <button
                          key={j}
                          onClick={() => setCurrentLight(j)}
                          className="button-inactive"
                        ></button>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="crew-right">
                <img src={light.images.webp} alt="crew avatar" />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
