import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12 ">
      <div className="  px-6 flex flex-col items-start">
        {/* Governor Sindh Heading */}
        <h1 className="text-[#1E40AF] font-bold text-4xl ">Governor   Sindh</h1>
        <h2 className="text-[#1E40AF] text-2xl mt-2">Kamran Khan Tessori</h2>

        {/* Certifications */}
        <div className="mt-6 space-y-2">
          <p className="text-sky-500 text-xl">Certified Cloud</p>
          <p className="text-sky-500 text-xl">Applied Generative AI</p>
          <p className="text-sky-500 text-xl">Engineer (GenEng)</p>
        </div>

        {/* Earnings Info */}
        <p className="mt-6 text-lg text-[#1E40AF] font-semibold">
          Earn up to $5,000/month
        </p>

        {/* Admissions Info */}
        <p className="mt-6 text-[#1E40AF] font-semibold text-lg">
          Now Admissions Are Open In
        </p>
        <p className="text-[#1E40AF] text-2xl mt-2">Hyderabad</p>

        {/* Apply Now Button and Stats */}
        <div className="mt-6 flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Apply Now
          </button>
          <div className="text-center">
            <p className="text-[#1E40AF]  font-bold text-lg">562,143</p>
            <h3 className="text-[#1E40AF]  text-sm">Accepted Applications</h3>
          </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;



