import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-teal-600 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-semibold tracking-wide">
          Care for Skills
        </Link>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`flex-1 md:flex justify-end ${isOpen ? "block" : "hidden"} md:block`}
        >
          <Link to="/" className="text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-teal-500 hover:text-gray-100 font-medium md:ml-4">
            Home
          </Link>
          <Link to="/Courses" className="text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-teal-500 hover:text-gray-100 font-medium md:ml-4">
            Courses
          </Link>
          <Link to="/CourseRecommendation" className="text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-teal-500 hover:text-gray-100 font-medium md:ml-4">
            Course Recommendation
          </Link>
          <Link to="/SelfAssessment" className="text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-teal-500 hover:text-gray-100 font-medium md:ml-4">
          Self-Assessment
        </Link>
          <Link to="/AddCourse" className="text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-teal-500 hover:text-gray-100 font-medium md:ml-4">
            Add Courses
          </Link>
          <Link to="/About" className="text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-teal-500 hover:text-gray-100 font-medium md:ml-4">
            About Us
          </Link>
          <Link to="/Contact" className="text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-teal-500 hover:text-gray-100 font-medium md:ml-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
