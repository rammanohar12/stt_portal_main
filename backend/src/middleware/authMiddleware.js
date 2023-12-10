// src/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, token not found" });
  }
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res
      .status(401)
      .json({ autharization: false, message: "Unauthorized, invalid token" });
  }
};

module.exports = authMiddleware;
