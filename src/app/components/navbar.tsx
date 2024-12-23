import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-[#1E40AF]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        <div className="text-[#7DD3FC] font-bold text-lg">
          Tution Free Education Program on Latest Technologies
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Apply 
          </a>
          <a href="#" className="text-white hover:text-gray-200">
             Jobs
          </a>
          <a href="#" className="text-white hover:text-gray-200">
            Result
          </a>
         
          <a href="#" className="text-white hover:text-gray-200">
            Courses 
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

   












