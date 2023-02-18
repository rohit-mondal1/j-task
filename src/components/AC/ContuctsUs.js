import React from 'react';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ContuctsUs = () => {
  const navegate = useNavigate();
  const handelsubmite = (e) => {
    e.preventDefault();

    return navegate("/"), toast.success("Successfully send massage!");
  };
  return (
    <div>
      <div>
        <div data-aos="fade-up"
     data-aos-duration="3000" className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto my-5 bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Contacts Us</h1>
          <form
            onSubmit={handelsubmite}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-400">
                Name *
              </label>
              <input
                type="text"
                required
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-gray-400">
                Email *
              </label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="email"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="subject" className="block text-gray-400">
                Subject *
              </label>
              <input
                type="text"
                required
                name="subject"
                id="subject"
                placeholder="subject"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-400">
                Massage *
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-100 text-gray-900 focus:border-blue-400"
                cols="57"
                rows="5"
              ></textarea>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContuctsUs;