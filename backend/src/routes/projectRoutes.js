const express = require("express");
const {
  createProject,
  getProjectList,
  getProjectDetails,
} = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create-project", authMiddleware, createProject);
router.post("/list", authMiddleware, getProjectList);
router.post("/projectDetails", authMiddleware, getProjectDetails);

module.exports = router;
