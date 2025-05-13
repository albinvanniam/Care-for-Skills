const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  action: String, // e.g., "search", "course_selected"
  tags: [String], // Tags associated with the action
  timestamp: { type: Date, default: Date.now },
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
