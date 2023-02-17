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



{/* 
<label htmlFor="my-modal-3" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div> */}







    </div>
  );
};

export default Home;