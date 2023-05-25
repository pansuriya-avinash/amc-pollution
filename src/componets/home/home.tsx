import React from "react";
import PollutionBox from "./componet/pollutionBox";
import "../home/home.scss";

const Home: React.FC<any> = () => {
  return (
    <div>
      <div className="home-tittle-wrapper">
        <h1>
          Ahmedabad CO<sub>2</sub> Area{" "}
        </h1>
      </div>
      <div className="card">
        <PollutionBox/>
      </div>
    </div>
  );
};

export default Home;
