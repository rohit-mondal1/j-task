import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Fresher_contint from "./Fresher_contint";

const Fresher_Jobs = () => {
  const [fresher, setFresher] = useState([]);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    fetch("fresherJob.json")
      .then((res) => res.json())
      .then((data) => setFresher(data));
  }, []);

  return (
    <div>
      <div className="grid  grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-center">
        {fresher.map((jobs, i) => (
          <Fresher_contint job={jobs} key={i + 1}></Fresher_contint>
        ))}
      </div>

      {pathname === "/Fresher_Jobs" ? null : (
        <div className="mx-auto  w-44 mb-8 mt-3">
          <Link to="/Fresher_Jobs">
            <button className="btn btn-accent text-center">
              Fresher All Jobs
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Fresher_Jobs;