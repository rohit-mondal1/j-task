import React, { useEffect, useState } from "react";
import Exprience_cart from "./Exprience_cart";

const Experienced_Jobs = () => {
  const [expreacse, setExpreacse] = useState([]);

  useEffect(() => {
    fetch("exprenceJob.json")
      .then((res) => res.json())
      .then((data) => setExpreacse(data));
  }, []);

  return (
    <div>
      <div className="grid  grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-center">
        {expreacse.map((jobs, i) => (
          <Exprience_cart job={jobs} key={jobs.id}></Exprience_cart>
        ))}
      </div>

      <div className="mx-auto  w-44 mb-8 mt-3">
        <button className="btn btn-accent text-center">Experiences All Jobs</button>
      </div>
    </div>
  );
};

export default Experienced_Jobs;
