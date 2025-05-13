import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/courses`);
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const toggleTagSelection = (tags) => {
    setSelectedTags(tags);
    localStorage.setItem("selectedTags", JSON.stringify(tags)); // Save tags to localStorage
    console.log("Tags saved to localStorage:", tags);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white shadow-lg rounded-lg p-4 border"
            onClick={() => toggleTagSelection(course.tags)}
          >
            <img
              src={`http://localhost:5000${course.image}`}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
