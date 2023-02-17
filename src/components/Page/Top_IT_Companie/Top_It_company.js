import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../context/UserContext";

import Top_it_cart from "./Top_it_cart";

const Top_It_company = () => {
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
    </div>
  );
};

export default Top_It_company;
