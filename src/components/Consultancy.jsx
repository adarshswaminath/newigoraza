import React from "react";
import {AiFillStar} from "react-icons/ai"

import { aboutus } from "./constants/index";
const Card = ({title,caption}) => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg hover:bg-[#1d3557] group">
      <div className="text-3xl">
        <AiFillStar className="text-[#1d3557] group-hover:text-white" />
      </div>
      <h3 className="font-bold mt-2 text-[#1d3557] group-hover:text-white">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-100">
        {caption}
      </p>
    </div>
  );
};

function Consultancy() {
  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16 bg-gray-50">
      <div className="grid  lg:flex">
        {/* first section opens */}
        <div className="w-full lg:w-1/2">
          <div className="grid">
            <div className="text-sm text-[#1d3557]">IGORAZA Consultancy</div>
            <div className="text-gray-600 text-2xl md:text-3xl lg:text-5xl font-bold">
              Benefits when using our services
            </div>
          </div>
        </div>
        {/* secons section opens */}
        <div className="w-full lg:w-1/2">
          <p className="mt-2 lg:mt-8 text-gray-600">
            IGORAZA is a technology startup driven by passionate engineers
            dedicated to creating exceptional solutions for clients using the
            latest software and techniques. We value innovation, dedication, and
            perfection, and are committed to delivering incredible results for
            our partners
          </p>
        </div>
      </div>
      {/* cars sections opens */}
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
        {aboutus.map((value) => (
          <Card  key={value.id} title={value.title} caption={value.description} />
        ))}
      </div>
    </div>
  );
}

export default Consultancy;
