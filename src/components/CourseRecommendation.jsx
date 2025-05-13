import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

function CourseRecommendation({ selectedTags = [] }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    console.log("Selected Tags:", selectedTags); // Debug selectedTags

    const fetchRecommendations = async () => {
      if (!selectedTags || selectedTags.length === 0) {
        console.log("No tags provided for recommendations");
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/courses/ml-recommend`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userTags: selectedTags }),
        });

        if (response.ok) {
          const data = await response.json();
          setRecommendations(data || []);
        } else {
          console.error("Failed to fetch recommendations.");
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [selectedTags]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Recommended Courses for you</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.length > 0 ? (
          recommendations.map((course) => (
            <div key={course._id} className="bg-white shadow-lg rounded-lg p-4 border">
              <img
                src={`http://localhost:5000${course.image}`}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-semibold mt-4 mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No recommendations available for you.</p>
        )}
      </div>
    </div>
  );
}

export default CourseRecommendation;
