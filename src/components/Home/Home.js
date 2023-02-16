import React from 'react';
import Experienced_Jobs from "../Page/Experienced_Jobs/Experienced_Jobs";
import Fresher_Jobs from "../Page/Fresher_Jobs/Fresher_Jobs";
import Top_It_company from "../Page/Top_IT_Companie/Top_It_company";
import Baner from "./Baner";

const Home = () => {
  return (
    <div>
      <div className="mb-10">
        <Baner />
      </div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-blue-900 my-10 text-center">
          Fresher Jobs
        </h1>
        <Fresher_Jobs />
      </div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-blue-900 my-10 text-center">
          Experienced Jobs
        </h1>
        <Experienced_Jobs />
      </div>
      <div className="my-20">
        <h1 className="text-3xl font-bold text-blue-900 my-10 text-center">
          Top IT Companies
        </h1>
        <Top_It_company />
      </div>
    </div>
  );
};

export default Home;