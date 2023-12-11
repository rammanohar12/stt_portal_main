const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projectName: { type: String, unique: true, required: true },
  domain: { type: String, required: true },
  hostname: { type: String, required: true },
  apikey: { type: String, required: true },
  appId: { type: String, required: true },
  projectId: { type: String, required: true },
  language: { type: String, required: true },
  createdAt: { type: Date },
});

const Project = mongoose.model("Projects", projectSchema);

module.exports = Project;
