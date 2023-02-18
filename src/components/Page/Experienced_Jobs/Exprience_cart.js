import React from "react";
import { Link } from "react-router-dom";

const Exprience_cart = ({ job }) => {
  const { position, company, location, skill, price , experienced} = job;

  return (
    <div>
      <div data-aos="zoom-in-up" className="max-w-[360px] p-4 bg-slate-200 border-spacing-1 my-3 mx-auto ml-3 mr-3 ">
        <h1 className=" text-center mb-3">
          <span className="text-xl font-bold text-blue-800">
            company name :
          </span>
          {company}
        </h1>
        <h1>
          <span className="text-xl font-normal text-blue-800">
            1. company location :
          </span>
          {location}
        </h1>
        <h1>
          <span className="text-xl font-normal text-blue-800">
            2. job Position :
          </span>
          {position}
        </h1>
        <h1>
          <span className="text-xl font-normal text-blue-800">
            3. job experienced :
          </span>
          {experienced}
        </h1>
        <h1>
          <span className="text-xl font-normal text-blue-800">
            4. Job skill :
          </span>
          {skill.map((s) => (
            <span className="pl-2">{s},</span>
          ))}
        </h1>
        <h1>
          <span className="text-xl font-normal text-blue-800">
            5. Job price :
          </span>
          {price} BDT
        </h1>
        <Link to='/apllay'>
         <button className="btn btn-outline btn-primary w-full mt-4">
         Applay
        </button>
        </Link>
         
      </div>
    </div>
  );
};

export default Exprience_cart;
