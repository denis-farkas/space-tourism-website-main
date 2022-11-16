import "./destination.css";
import "./destination-tablet.css";
import "./destination-mobile.css";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

const Destination = () => {
  return (
    <div className="container destination">
      <Header />
      <div className="destination-body">
        <div className="destination-title">
          <h5>
            <span className="gris">01</span>PICK YOUR DESTINATION
          </h5>
        </div>
        <div className="destination-tab">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default Destination;
