import React, { useState } from "react";

function SelfAssessment() {
  const [skills, setSkills] = useState({
    beginner: false,
    Leadership: false,
    Communication: false,
    Growth: false,
    Strategy: false,
    Teamwork: false,
    Management: false,
    Conflict: false,
    Emotional: false,
    ProblemSolving: false,
    DecisionMaking: false,
    WorkLifeBalance: false,
    PublicSpeaking: false,
    Negotiation: false,
    TimeManagement: false,
    CriticalThinking: false,
  });

  const courses = [
    { name: "Leadership Mastery", tags: ["Leadership", "Management"] },
    { name: "Effective Communication", tags: ["Communication"] },
    { name: "Growth Mindset Training", tags: ["Growth", "Strategy"] },
    { name: "Team Collaboration Skills", tags: ["Teamwork"] },
    { name: "Beginner's Guide to Success", tags: ["beginner"] },
    { name: "Conflict Resolution Tactics", tags: ["Conflict", "Strategy"] },
    { name: "Emotional Intelligence Workshop", tags: ["Leadership", "Communication"] },
    { name: "Problem Solving Fundamentals", tags: ["Strategy", "ProblemSolving"] },
    { name: "Advanced Decision Making", tags: ["Strategy", "DecisionMaking"] },
    { name: "Work-Life Balance Essentials", tags: ["Growth", "WorkLifeBalance"] },
    { name: "Project Management Basics", tags: ["Management", "Teamwork"] },
    { name: "Public Speaking Confidence", tags: ["PublicSpeaking"] },
    { name: "Negotiation Skills Mastery", tags: ["Negotiation", "Leadership"] },
    { name: "Time Management Secrets", tags: ["TimeManagement", "Strategy"] },
    { name: "Critical Thinking Workshop", tags: ["Strategy", "CriticalThinking"] },
  ];

  const handleChange = (e) => {
    setSkills({ ...skills, [e.target.name]: e.target.checked });
  };

  const selectedTags = Object.keys(skills).filter((key) => skills[key]);

  const recommendedCourses = courses.filter((course) =>
      selectedTags.some((tag) => course.tags.includes(tag))
  );

  return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Self-Assessment</h1>
        <form className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-4"> {/* Grid layout */}
            {Object.keys(skills).map((skill) => (
                <label className="flex items-center" key={skill}>
                  <input
                      type="checkbox"
                      name={skill}
                      onChange={handleChange}
                      className="mr-2"
                  />
                  {skill.replace(/([A-Z])/g, " $1")}
                </label>
            ))}
          </div>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Course Recommendations</h2>
          {recommendedCourses.length > 0 ? (
              <ul className="list-disc px-6">
                {recommendedCourses.map((course, index) => (
                    <li key={index} className="mb-2">
                      {course.name}
                    </li>
                ))}
              </ul>
          ) : (
              <p className="text-center">No matching courses found.</p>
          )}
        </div>
      </div>
  );
}

export default SelfAssessment;
