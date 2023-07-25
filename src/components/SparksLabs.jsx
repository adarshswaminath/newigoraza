import React from "react";
import login from "./assets/login.svg";

function SparksLabs() {
  return (
    <div className="flex flex-col-reverse md:flex-row p-4 md:p-8 lg:p-12 xl:p-12">
      {/* text and button section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl text-[#1d3557] font-bold mb-4">SparkLabs</h2>
        <p className="text-gray-500 mb-6">
          Welcome to IGORAZA! Join our team and grow your career with
          SparkLabs! We offer exciting opportunities in a dynamic and
          fast-paced environment. You'll work with talented professionals and
          make a meaningful impact on our company's success. We provide
          alluring salary, benefits, and career development programs. Apply
          today and take the first step towards a rewarding career!
        </p>
        <a href="https://probable-measure-5af.notion.site/SparkLabs-e8d74efdb3b245898be22323f424b6d2">
        <button className="bg-[#1d3557] hover:bg-[#1d3540] text-white font-medium py-2 px-4 rounded focus:outline-none">
          Apply Now
        </button>
        </a>
      </div>
      <div className="md:w-1/2">
        <img src={login} alt="Login" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default SparksLabs;
