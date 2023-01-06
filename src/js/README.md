# Реалізація доступу до бази даних

# В цьому розділі розміщені програмні коди для доступу до бази даних (в прикдаді - js).

## Файл підключення до бази даних

```js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a2l6i0n8a2004',
  database: 'sup',
});

module.exports = connection;
```

## Кореневий файл серверу

```js
const express = require('express');

const app = express();
const port = 8000;

const connection = require('./data_base');

app.use(express.json());

app.use('/api', require('./route'));

connection.connect(() => app.listen(port, () => console.log(`Server is running on port ${port}`)));
```

## Файл з роутером

```js
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
```

## Файл контролерів для обробки запитів

```js
const connection = require("./data_base");

const getAllProjects = (req, res) => {
  const query = "SELECT * FROM project";
  connection.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

const getProject = (req, res) => {
  const query = `SELECT * FROM project WHERE id=${req.params.id}`;
  connection.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result[0]);
  });
};

const AddNewProject = (req, res) => {
  const { name, team, task_id } = req.body;
  if (!(name && team))
    return res
      .status(400)
      .json({ message: "name and team required" });
     const queryToFindProject = `SELECT * FROM project WHERE team="${team}"`;
      connection.query(queryToFindProject, (err, result) =>{
        if (err) return res.status(500).json(err);
        if (result.length !== 0) return res.status(406).json('There is already project with this team');
  const query = "INSERT INTO project SET ?";
  const project = {
    name,
    team,
    task_id: task_id || 1,
  };
  connection.query(query, project, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: "New project created" });
  });
});
};

const updateProject = (req, res) => {
  const { name, team } = req.body;
  if (!(name || team)){
    res
    .status(400)
    .json({ message: "name or team  required " });
    return
  }
  connection.query(`SELECT * FROM project WHERE id=${req.params.id}`, (err, result) =>{
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json('No project with this id');
  let query = "";
  if (name) {
    query = `UPDATE project SET name = '${req.body.name}' WHERE id = '${req.params.id}'`;
    connection.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  if (team) {
    query = `UPDATE project SET team = '${req.body.team}' WHERE id = '${req.params.id}'`;
    connection.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  res.status(200).json({ message: "Project updated" });
});
};

const deleteProject = (req, res) => {
  const query = `DELETE FROM project WHERE id=${req.params.id}`;
  connection.query(`SELECT * FROM project WHERE id=${req.params.id}`, (err, result) =>{
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json('No project with this id');
  connection.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Project deleted" });
  });
  });
};

module.exports = { getAllProjects, AddNewProject, getProject, updateProject, deleteProject };
```
