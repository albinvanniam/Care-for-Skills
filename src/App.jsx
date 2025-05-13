import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import CourseRecommendation from "./components/CourseRecommendation";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import AddCourse from "./components/AddCourse";
import SelfAssessment from "./components/SelfAssessment";
import Community from "./components/Community";

function App() {
  // Fetch selected tags from localStorage (default to an empty array if none exist)
  const selectedTags = JSON.parse(localStorage.getItem("selectedTags")) || [];

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/community" element={<Community />} />
          <Route path="/Courses" element={<Courses />} />
          <Route
  path="/CourseRecommendation"
  element={<CourseRecommendation selectedTags={JSON.parse(localStorage.getItem("selectedTags")) || []} />}
/>
            <Route path="/SelfAssessment" element={<SelfAssessment />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


