// src/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  apikey: { type: String, nullable: true, optional: true },
  authenticationKey: { type: String, nullable: true, optional: true },
  active: { type: Boolean, default: true },
  verifiedEmailId: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
