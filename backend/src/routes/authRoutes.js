// src/routes/authRoutes.js
const express = require("express");
const {
  register,
  login,
  getUsersList,
  deleteUser,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/list", authMiddleware, getUsersList);
router.post("/delete", authMiddleware, deleteUser);

module.exports = router;
