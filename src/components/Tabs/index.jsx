import { useState } from "react";
import "./tabs.css";
import "./tabs-tablet.css";
import "./tabs-mobile.css";
import data from "../../data/data.json";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState(data.destinations[0].name);
  const tabList = [
    {
      name: data.destinations[0].name,
      label: data.destinations[0].name,
      content: (
        <>
          <div className="tab-left">
            <img
              src={data.destinations[0].images.webp}
              alt={data.destinations[0].name}
            />
          </div>
          <div className="tab-right">
            <h2>{data.destinations[0].name}</h2>
            <div className="body-text">{data.destinations[0].description}</div>
            <div className="separation"></div>
            <div className="tab-right-footer">
              <div className="distance">
                <div className="sub-heading-2">AVG. DISTANCE</div>
                <div className="sub-heading-1">
                  {data.destinations[0].distance}
                </div>
              </div>
              <div className="time">
                <div className="sub-heading-2">EST. TRAVEL TIME</div>
                <div className="sub-heading-1">
                  {data.destinations[0].travel}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: data.destinations[1].name,
      label: data.destinations[1].name,
      content: (
        <>
          <div className="tab-left">
            <img
              src={data.destinations[1].images.webp}
              alt={data.destinations[1].name}
            />
          </div>
          <div className="tab-right">
            <h2>{data.destinations[1].name}</h2>
            <div className="body-text">{data.destinations[1].description}</div>
            <div className="separation"></div>
            <div className="tab-right-footer">
              <div className="distance">
                <div className="sub-heading-2">AVG. DISTANCE</div>
                <div className="sub-heading-1">
                  {data.destinations[1].distance}
                </div>
              </div>
              <div className="time">
                <div className="sub-heading-2">EST. TRAVEL TIME</div>
                <div className="sub-heading-1">
                  {data.destinations[1].travel}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },

    {
      name: data.destinations[2].name,
      label: data.destinations[2].name,
      content: (
        <>
          <div className="tab-left">
            <img
              src={data.destinations[2].images.webp}
              alt={data.destinations[2].name}
            />
          </div>
          <div className="tab-right">
            <h2>{data.destinations[2].name}</h2>
            <div className="body-text">{data.destinations[2].description}</div>
            <div className="separation"></div>
            <div className="tab-right-footer">
              <div className="distance">
                <div className="sub-heading-2">AVG. DISTANCE</div>
                <div className="sub-heading-1">
                  {data.destinations[2].distance}
                </div>
              </div>
              <div className="time">
                <div className="sub-heading-2">EST. TRAVEL TIME</div>
                <div className="sub-heading-1">
                  {data.destinations[2].travel}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: data.destinations[3].name,
      label: data.destinations[3].name,
      content: (
        <>
          <div className="tab-left">
            <img
              src={data.destinations[3].images.webp}
              alt={data.destinations[3].name}
            />
          </div>
          <div className="tab-right">
            <h2>{data.destinations[3].name}</h2>
            <div className="body-text">{data.destinations[3].description}</div>
            <div className="separation"></div>
            <div className="tab-right-footer">
              <div className="distance">
                <div className="sub-heading-2">AVG. DISTANCE</div>
                <div className="sub-heading-1">
                  {data.destinations[3].distance}
                </div>
              </div>
              <div className="time">
                <div className="sub-heading-2">EST. TRAVEL TIME</div>
                <div className="sub-heading-1">
                  {data.destinations[3].travel}
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="tab-content">
      <div className="tabs-container">
        <div className="tabs">
          {tabList.map((tab, i) => (
            <button
              key={i}
              onClick={() => setCurrentTab(tab.name)}
              className={tab.name === currentTab ? "button-active" : ""}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {tabList.map((tab, i) => {
        if (tab.name === currentTab) {
          return <>{tab.content}</>;
        } else {
          return null;
        }
      })}
    </div>
  );
}
