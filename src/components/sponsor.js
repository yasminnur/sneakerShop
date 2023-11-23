import React, { useState, useEffect } from "react";
import data from "../data/sponsor.json";

export default function Sponsor() {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        {jsonData.map((item, index) => (
          <a key={index} href="#" className="group">
            <div className="mt-5">
              <img src={item.img} alt="" className=""/>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
