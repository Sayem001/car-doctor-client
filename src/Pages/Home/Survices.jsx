import { useEffect } from "react";
import { useState } from "react";
import SurviceCard from "./SurviceCard";
import { Link } from "react-router-dom";

const Survices = () => {
  const [survices, setSurvices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/survices")
      .then((res) => res.json())
      .then((data) => setSurvices(data));
  }, []);

  return (
    <div>
      <div className="w-1/3 mx-auto">
        <h3 className="text-2xl text-red-500 font-bold text-center">Service</h3>
        <h2 className="text-5xl font-extrabold my-8">Our Service Area</h2>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {survices.map((survice) => (
          <SurviceCard survice={survice} key={survice._id}></SurviceCard>
        ))}
      </div>
  
    </div>
  );
};

export default Survices;
