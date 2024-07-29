"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Templates = () => {
  const [data, setData] = useState([]);
  const [hoverTemplateId, setHoverTemplateId] = useState(null);

  const handleHover = (_id) => {
    setHoverTemplateId(_id);
  };

  const handleLive = () => {
    setHoverTemplateId(null);
  };

  useEffect(() => {
    fetch("http://localhost:5000/template")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <div className="m-10 flex flex-wrap justify-center gap-16">
        {data.map((item) => (
          <div
            key={item?._id}
            className="relative flex items-center justify-center"
            onMouseEnter={() => handleHover(item._id)}
            onMouseLeave={handleLive}
          >
            <Link
              href={item?.templateURL}
              className="absolute bg-green-500 p-2 uppercase text-white"
              style={{
                display: hoverTemplateId === item._id ? "block" : "none",
              }}
            >
              Use This Template
            </Link>
            <img src={item?.templateImage} width={350} draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
