import React from 'react';

const All_company_cart = ({companys}) => {
    const { img, link, name, location, about } = companys;
    return (
        <div>
            <div>
        <div data-aos="fade-up"
     data-aos-duration="3000" className="relative my-4 ml-4 mx-auto flex flex-col  items-center max-w-lg gap-4 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-900 text-gray-100">
          <img
            src={img}
            alt="lodging..."
            className="object-cover w-full mb-4 h-44 sm:h-44 dark:bg-gray-500"
          />
          <h2 className="text-2xl text-center text-red-200  font-semibold leading-tight tracking-wide">
            Company Name: {name}
          </h2>
          <p className="flex-1 text-center text-xl  text-gray-400">
            <span className="font-semibold text-red-500">Location : </span>{" "}
            {location}
          </p>
          <p className="flex-1 text-center text-xl  text-gray-400">
            <span className="font-semibold">About : </span> {about}
          </p>

          <button
            type="button"
            className="px-8 py-3 font-semibold rounded-full bg-blue-400 text-gray-900"
          >
            <a href={link} target="_blank">
              visit website
            </a>
          </button>
        </div>
      </div>
        </div>
    );
};

export default All_company_cart;