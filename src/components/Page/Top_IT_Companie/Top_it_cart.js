import React from "react";
import { Link } from "react-router-dom";



const Top_it_cart = ({ companys, handeldetls }) => {
  const { img, name } = companys;

  return (
    <div>
      <div>
        <div className="relative my-4 ml-4 mx-auto flex flex-col items-center max-w-[360px] gap-4 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-900 text-gray-100">
          <img
            src={img}
            alt="lodging..."
            className="object-cover w-full mb-4 h-44 sm:h-44 dark:bg-gray-500"
          />
          <h2 className="text-2xl text-center text-red-200  font-semibold leading-tight tracking-wide">
            Company Name:
            <p className="flex-1 text-center text-xl  text-gray-400">{name}</p>
          </h2>

          <Link to="/Details">
            <button
              onClick={() => handeldetls(companys)}
              type="button"
              className="px-8 py-3 font-semibold rounded-full bg-blue-400 text-gray-900"
            >
              Details Company
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top_it_cart;
