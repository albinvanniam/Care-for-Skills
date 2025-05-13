import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  // Reusable button styles
  const buttonStyles =
      "px-6 py-3 bg-teal-500 rounded-full text-white font-semibold hover:bg-teal-600 transition duration-200";

  return (
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to LTC Courses</h1>
            <h2 className="text-xl mb-6">Recommender System for Education in the Care Sector</h2>
            <p className="text-xl mb-6">Empowering Care Through Knowledge</p>
            <button
                onClick={() => navigate("/courses")}
                className={buttonStyles}
            >
              Explore Courses
            </button>
          </div>
        </section>

        {/* Course Categories Section */}
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Course Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Basic Care</h3>
              <p className="text-gray-600">
                Courses for foundational caregiving skills.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Specialized Care</h3>
              <p className="text-gray-600">
                Courses for specific care needs in LTC.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Advanced Techniques</h3>
              <p className="text-gray-600">
                Advanced skills for senior caregiving professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700">
                  "LTC Courses helped me gain the confidence and skills I needed
                  to provide better care for my patients."
                </p>
                <h3 className="mt-4 text-teal-600 font-semibold">
                  - Sarah, Caregiver
                </h3>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700">
                  "The specialized courses have been a game-changer for our team.
                  Highly recommended for LTC professionals."
                </p>
                <h3 className="mt-4 text-teal-600 font-semibold">
                  - Michael, LTC Facility Manager
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Become part of a network of dedicated LTC professionals.
          </p>
          <button
              onClick={() => navigate("/community")}
              className={buttonStyles}
          >
            Get Started
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} LTC Courses. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
  );
};

export default Main;
