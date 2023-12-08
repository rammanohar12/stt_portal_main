// src/controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/loginSchema");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const apikey = uuidv4();
    const authenticationKey = uuidv4();

    const newUser = new User({
      username,
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
    const { username, password } = req.body;

    const userDetails = await User.findOne({ username });


    if (!userDetails) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, userDetails.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const tokenObject = {
      email: username,
      apikey: userDetails.apikey,
      authenticationKey: userDetails.authenticationKey,
    };

    const token = jwt.sign({ user: tokenObject }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, success: true });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, login };
