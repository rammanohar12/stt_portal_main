// src/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, unique: true, required: true },
  lastName: { type: String, unique: true, required: true },
  role: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  apikey: { type: String, nullable: true, optional: true },
  authenticationKey: { type: String, nullable: true, optional: true },
  active: { type: Boolean, default: true },
  verifiedEmailId: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
