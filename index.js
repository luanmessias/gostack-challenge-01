const express = require("express");
const server = express();
server.use(express.json());

let numberOfRequests = 0;
const projects = [];

// MIDDLEWARES
/* *********************************** */

// [MIDDLEWARE] - Check if project is duplicated
function checkDuplicateProject(req, res, next) {
  const { id, title } = req.body;
  const projectId = projects.find(p => p.id == id);
  const projectTitle = projects.find(p => p.title == title);

  if (projectId) {
    return res.status(400).json({ error: "Project id is already registered" });
  } else if (projectTitle) {
    return res
      .status(400)
      .json({ error: "Project title is already registered" });
  }

  return next();
}

// [MIDDLEWARE] - Check if project exists
function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: "Project not Found" });
  }

  return next();
}

// [MIDDLEWARE] - Log number of rquests
function logRequests(req, res, next) {
  numberOfRequests++;
  console.log(`Number of requets: ${numberOfRequests}`);
  return next();
}

server.use(logRequests);

// PROJETCS
/* *********************************** */

// [GET] - List projects
server.get("/projects", (req, res) => {
  return res.json(projects);
});

// [POST] - Add new project
server.post("/projects", checkDuplicateProject, (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);
  return res.json(project);
});

// [PUT] - Edit Project
server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

// [DELETE] - Remove project
server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);
  projects.splice(projectIndex, 1);

  return res.send();
});

// TASKS
/* *********************************** */

// [POST] - Add task
server.post("/project/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { tasks } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(tasks);

  return res.json(project);
});

server.listen(4000);
