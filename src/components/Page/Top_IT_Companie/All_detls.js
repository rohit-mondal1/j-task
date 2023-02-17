import React, { useEffect, useState } from "react";
import All_company_cart from "./All_company_cart";

const All_detls = () => {
  const [company, setcompany] = useState([]);
  useEffect(() => {
    fetch("topitcompany.json")
      .then((res) => res.json())
      .then((data) => setcompany(data));
  });
  return (
    <div>
      <div className="grid  grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-center">
        {company.map((p) => (
          <All_company_cart key={p.id} companys={p}></All_company_cart>
        ))}
      </div>
    </div>
  );
};

export default All_detls;
