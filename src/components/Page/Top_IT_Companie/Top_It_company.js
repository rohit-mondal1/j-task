import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Authcontext } from "../../../context/UserContext";

import Top_it_cart from "./Top_it_cart";

const Top_It_company = () => {
  const { pathname } = useLocation();
  const [company, setcompany] = useState([]);
  const { setCompane } = useContext(Authcontext);
  useEffect(() => {
    fetch("topitcompany.json")
      .then((res) => res.json())
      .then((data) => setcompany(data));
  });

  const handeldetls = (e) => {
    setCompane(e);
  };
  return (
    <div>
      <div className="grid  grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-center">
        {company.map((p) => (
          <Top_it_cart
            key={p.id}
            companys={p}
            handeldetls={handeldetls}
          ></Top_it_cart>
        ))}
      </div>

      {/* {pathname === "/Fresher_Jobs" ? null : ( */}
        <div className="mx-auto  w-44 mb-8 mt-3">
          <Link to="/All_Details">
            <button className="btn btn-accent text-center">
              All Company
            </button>
          </Link>
        </div>
      {/* )} */}
    </div>
  );
};

export default Top_It_company;
