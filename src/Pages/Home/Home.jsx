import { Link } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Survices from "./Survices";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Survices />
      <div className="text-center my-6">
        <Link to="/survices">
          <button className="btn btn-primary btn-outline">More Services</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
