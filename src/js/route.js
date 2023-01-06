const express = require("express");
const router = express.Router();
const { getAllProjects, AddNewProject, getProject, updateProject, deleteProject } = require("./controler");

router
  .get("/projects", getAllProjects)
  .get("/project/:id", getProject)
  .post("/project", AddNewProject)
  .put("/project/:id", updateProject)
  .delete("/project/:id", deleteProject);

module.exports = router;