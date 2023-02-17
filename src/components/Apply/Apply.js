import React from "react";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navegate = useNavigate();

  const handelsubmite = (event) => {
    event.preventDefault();
    console.log("object");
    return navegate("/");
  };
  return (
    <div>
      <div>
        <div className="w-full max-w-md mx-auto mt-6 p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Applay</h1>
          <form
            onSubmit={handelsubmite}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="Email" className="block text-gray-400">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                id="Email"
                placeholder="name@gmail.com"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="text" className="block text-gray-400">
                Skill *
              </label>
              <input
                required
                type="text"
                name="text"
                id="text"
                placeholder="Skill"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="text" className="block text-gray-400">
                Phone Number *
              </label>
              <input
                required
                type="number"
                name="text"
                id="text"
                placeholder="Number"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="text" className="block text-gray-400">
                Why are you the best to work with? *
              </label>
              <input
                required
                type="text"
                name="text"
                id="text"
                placeholder="me"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-400">
            Applay
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Apply;
