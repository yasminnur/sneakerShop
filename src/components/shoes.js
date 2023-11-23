import React, { useState, useEffect } from "react";
import data from "../data/shoes.json";

export default function Shoes() {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap px-14">
          <div className="w-full">
            <h1 className="uppercase text-abu font-bold text-3xl lg:text-4xl">
                Our Top <span className="text-secondary ">Shoes</span>
            </h1>
                      {/* CARD */}
            <div className="flex flex-wrap justify-center md:justify-start mx-auto gap-x-8 md:gap-x-20 lg:gap-x-6">
              {jsonData.map((item, index) => (
                <a key={index} href="#" className="group">
                  <div className="relative h-64 w-52 mt-10 shadow-2xl">
                    <div className="h-56 ">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                    </div>
                    <div className="flex justify-center p-2 bg-abu rounded-b-xl group-hover:bg-secondary">
                      <h3 className="text-putih uppercase font-semibold">
                        {item.name}
                      </h3>
                          </div>
                          <div className="absolute p-2 rounded-lg bg-secondary top-4 right-3">
                              <img src="./assets/love.png" alt="" className="w-3"/>
                          </div>
                          <div className="absolute p-2 rounded-lg bg-abu top-14 right-3">
                              <img src="./assets/plus.png" alt="" className="w-3"/>
                          </div>
                  </div>
                </a>
              ))}
                      </div>
          </div>
        </div>
      </div>
    </>
  );
}
