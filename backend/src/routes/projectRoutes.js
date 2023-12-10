const express = require("express");
const {
  createProject,
  getProjectList,
  getProjectDetails,
  deleteProject,
} = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create-project", authMiddleware, createProject);
router.post("/list", authMiddleware, getProjectList);
router.post("/projectDetails", authMiddleware, getProjectDetails);
router.post("/delete", authMiddleware, deleteProject);

module.exports = router;
