import React from "react";
import NetworkingImage from "../assets/Networking.jpeg";
import CollaborativeImage from "../assets/collaborative.png";
import ResourcesImage from "../assets/Resourses.jpg";

const Community = () => {
    return (
        <div className="container mx-auto py-12 px-4">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-teal-600 mb-4">
                    Welcome to the LTC Community
                </h1>
                <p className="text-lg text-gray-600">
                    A place to connect, collaborate, and grow with dedicated LTC professionals.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <div className="mb-4">
                        <img
                            src={NetworkingImage}
                            alt="Networking"
                            className="w-20 h-20 mx-auto"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-teal-600 mb-2">
                        Networking Opportunities
                    </h3>
                    <p className="text-gray-600">
                        Build valuable connections with professionals in the LTC industry.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <div className="mb-4">
                        <img
                            src={CollaborativeImage}
                            alt="Collaborative Learning"
                            className="w-20 h-20 mx-auto"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-teal-600 mb-2">
                        Collaborative Learning
                    </h3>
                    <p className="text-gray-600">
                        Share knowledge, participate in discussions, and grow together.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <div className="mb-4">
                        <img
                            src={ResourcesImage}
                            alt="Exclusive Resources"
                            className="w-20 h-20 mx-auto"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-teal-600 mb-2">
                        Exclusive Resources
                    </h3>
                    <p className="text-gray-600">
                        Access curated resources and tools to enhance your LTC expertise.
                    </p>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="text-center mt-12">
                <h2 className="text-2xl font-bold text-teal-600 mb-4">
                    Ready to Join Us?
                </h2>
                <p className="text-gray-600 mb-6">
                    Become a part of a thriving community of LTC professionals.
                </p>
                <button className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-md hover:bg-teal-600 transition duration-200">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Community;
