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
  const user = {
    name,
    team,
    task_id: task_id || 1,
  };
  connection.query(query, user, (err) => {
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