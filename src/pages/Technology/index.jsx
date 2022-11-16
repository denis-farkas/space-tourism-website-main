import "./technology.css";
import "./technology-tablet.css";
import "./technology-mobile.css";
import Header from "../../components/Header";
import Technolight from "../../components/Technolight";

const Technology = () => {
  return (
    <div className="container technology">
      <Header />
      <div className="technology-body">
        <div className="technology-title">
          <h5>
            <span className="gris">03</span>SPACE LAUNCH 101
          </h5>
        </div>

        <Technolight />
      </div>
    </div>
  );
};

export default Technology;
