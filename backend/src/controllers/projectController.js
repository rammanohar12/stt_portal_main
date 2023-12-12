const { v4: uuidv4 } = require("uuid");
const Project = require("../models/projectSchema");

const createProject = async (req, res) => {
  try {
    const { projectName, domain, apikey, appId, language, hostname } = req.body;

    const existingProject = await Project.findOne({ hostname });

    const createdBy = req.user.apikey;

    if (existingProject) {
      return res.status(400).json({ message: "Project already exists" });
    }

    const projectId = uuidv4();

    const newProject = new Project({
      projectName,
      domain,
      createdAt: Date.now(),
      apikey,
      appId,
      projectId,
      language,
      hostname,
      createdBy
    });

    await newProject.save();

    res
      .status(201)
      .json({ success: true, message: "Project Created successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getProjectList = async (req, res) => {
  try {
    const { page, pageSize, searchText } = req.body;
    const { apikey, authenticationKey } = req.user;

    const query = {
      projectName: new RegExp(searchText, "i"),
    };

    const projectList = await Project.find(query)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const totalCount = await Project.countDocuments({});

    res.status(201).json({
      projectList,
      totalCount,
      message: "Project List fetched successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error in fetching project List:", error);
    res
      .status(500)
      .json({ success: false, message: "Error while fetching Project List" });
  }
};

const getProjectDetails = async (req, res) => {
  try {
    const { projectId } = req.body;

    const projectDetails = await Project.find({ projectId });

    res.status(201).json({
      projectDetails,
      message: "project Detailsfetched successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while fectching project details",
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.body;
    const deleteProject = await Project.deleteOne({ projectId });

    res
      .status(201)
      .json({ success: true, message: "Project Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error while deleting project details",
    });
  }
};

module.exports = {
  createProject,
  getProjectList,
  getProjectDetails,
  deleteProject,
};
