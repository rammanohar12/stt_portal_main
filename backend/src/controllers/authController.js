// src/controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/loginSchema");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    if (!role) {
      role = "freeOrgAdmin";
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      role,
      password: hashedPassword,
      authenticationKey: uuidv4(),
      apikey: uuidv4(),
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userDetails = await User.findOne({ email });

    if (!userDetails) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      userDetails.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const tokenObject = {
      email,
      apikey: userDetails.apikey,
      authenticationKey: userDetails.authenticationKey,
    };

    const token = jwt.sign({ user: tokenObject }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json({ token, success: true });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error while logging " });
  }
};

const getUsersList = async (req, res) => {
  try {
    const { page, pageSize, serachText } = req.body;

    const usersList = await User.find({})
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    const totalUserCount = await User.countDocuments({});

    res.status(200).json({ usersList, totalUserCount, success: true });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error while fetching the users List." });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { apikey } = req.body;

    const userDelete = await User.deleteOne({ apikey });
    res
      .status(200)
      .json({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error while deleting the user." });
  }
};

module.exports = { register, login, getUsersList, deleteUser };
