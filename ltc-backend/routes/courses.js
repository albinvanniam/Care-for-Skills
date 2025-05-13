const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

console.log(Course); // Add this line to debug
// eslint-disable-next-line no-undef
const multer = require("multer");
// eslint-disable-next-line no-undef
const path = require("path");
//const logger = require("../utils/logger");
// eslint-disable-next-line no-undef
const fs = require("fs");



// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  },
});

// Initialize Multer
const upload = multer({ storage: storage });

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a course with image upload
router.post("/", upload.single("image"), async (req, res) => {
    console.log(req.body); // Logs the form data
    console.log(req.file); // Logs the uploaded file
    
    try {
      const course = new Course({
        title: req.body.title,
        description: req.body.description,
        image: `/uploads/${req.file.filename}`,
        tags: req.body.tags.split(","),
      });
  
      const newCourse = await course.save();
      res.status(201).json(newCourse);
    } catch (err) {
      console.error("Error creating course:", err.message);
      res.status(500).json({ message: err.message });
    }
  });
  

// Get course recommendations based on tags or user-selected courses
router.post("/ml-recommend", async (req, res) => {
  const { userTags, selfAssessmentTags } = req.body; // Extract tags from the request body

  // Combine tags from user-selected courses and self-assessment, avoiding duplicates
  const combinedTags = [...new Set([...(userTags || []), ...(selfAssessmentTags || [])])];

  if (combinedTags.length === 0) {
    return res.status(400).json({ message: "Tags are required for recommendations." });
  }

  try {
    // Find courses that match any of the combined tags
    const recommendedCourses = await Course.find({
      tags: { $in: combinedTags },
    }).limit(10); // Limit the number of recommendations

    res.json(recommendedCourses);
  } catch (err) {
    console.error("Error fetching recommendations:", err.message);
    res.status(500).json({ message: err.message });
  }
});


// Self-assessment endpoint
router.post("/self-assessment", async (req, res) => {
    try {
      const { skills } = req.body; // Expecting an array of skill levels, e.g., ['beginner', 'intermediate']
  
      // Find courses matching the user's skill levels or skill gaps
      const recommendations = await Course.find({
        tags: { $in: skills },
      });
  
      // Log the search for future analysis (optional)
      console.log("Self-assessment data:", skills);
  
      res.json(recommendations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  

  

  // Serve the log file
  router.get("/logs", (req, res) => {
    const logFilePath = path.join(__dirname, "../logs/combined.log");

    fs.readFile(logFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading log file:", err);
            return res.status(500).json({ message: "Error reading log file" });
        }
        res.setHeader("Content-Type", "text/plain");
        res.send(data);
    });
});

  // Log user search and usage data

 

 

  router.post("/log-usage", async (req, res) => {
    try {
      const { userId, action, tags, details } = req.body;
  
      logger.info("User action logged", {
        userId,
        action,
        tags,
        details,
      });
  
      res.status(201).json({ message: "Usage logged successfully." });
    } catch (err) {
      logger.error("Error logging usage", { error: err.message });
      res.status(500).json({ message: err.message });
    }
  });
  


module.exports = router;

// Get course recommendations based on tags or user-selected courses
router.post("/ml-recommend", async (req, res) => {
  const { userTags, selfAssessmentTags } = req.body; // Extract tags from the request body

  // Combine tags from user-selected courses and self-assessment, avoiding duplicates
  const combinedTags = [...new Set([...(userTags || []), ...(selfAssessmentTags || [])])];

  if (combinedTags.length === 0) {
    return res.status(400).json({ message: "Tags are required for recommendations." });
  }

  try {
    // Find courses that match any of the combined tags
    const recommendedCourses = await Course.find({
      tags: { $in: combinedTags },
    }).limit(10); // Limit the number of recommendations

    res.json(recommendedCourses);
  } catch (err) {
    console.error("Error fetching recommendations:", err.message);
    res.status(500).json({ message: err.message });
  }
});

