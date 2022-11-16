import Header from "../../components/Header";
import Lights from "../../components/Light";
import "./crew.css";
import "./crew-tablet.css";
import "./crew-mobile.css";
const Crew = () => {
  return (
    <div className="container crew">
      <Header />
      <div className="crew-body">
        <Lights />
      </div>
    </div>
  );
};

export default Crew;
