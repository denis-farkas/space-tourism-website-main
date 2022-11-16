import "./technolight.css";
import "./technolight-tablet.css";
import "./technolight-mobile.css";

import { useState } from "react";
import data from "../../data/data.json";

export default function Technolights() {
  const [currentLight, setCurrentLight] = useState(0);
  const buttonList = [0, 1, 2];

  return (
    <>
      {data.technology.map((light, i) => {
        if (currentLight === i) {
          return (
            <div key={i} id={i} className="technology-content">
              <div className="technology-aside">
                {buttonList.map((button, j) => {
                  if (button === i) {
                    return (
                      <button key={j} className="button-active">
                        {j + 1}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        key={j}
                        onClick={() => setCurrentLight(j)}
                        className="button-inactive"
                      >
                        {j + 1}
                      </button>
                    );
                  }
                })}
              </div>
              <div className="technology-left">
                <div className="technology-label">THE TERMINOLOGY...</div>
                <div className="technology-name">{light.name}</div>
                <div className="body-text">{light.description}</div>
              </div>
              <div className="technology-right">
                {window.innerWidth > 1023 ? (
                  <img src={light.images.portrait} alt="technology avatar" />
                ) : (
                  <img src={light.images.landscape} alt="technology avatar" />
                )}
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
