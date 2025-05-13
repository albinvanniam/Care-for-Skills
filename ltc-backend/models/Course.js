const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // URL to the course image
  tags: [String], // Tags for recommendations
});

module.exports = mongoose.model("Course", courseSchema);
