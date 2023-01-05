const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;
const host = '0.0.0.0';

const connection = require('./data_base');


app.get("/", (req, res) => {
    const query = 'SELECT * FROM project';
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
});

app.get("/:id", (req, res) => {
    const query = `SELECT * FROM project WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.sendStatus(404);
        res.status(200).json(result);
    });
});

app.put("/:id", (req, res) => {
    if (!req.body.name && !req.body.team) return res.status(204).json({ 'message': 'Name or team required' });

    let query = '';
    if (req.body.name) {
        query = `UPDATE project SET name = '${req.body.name}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    if (req.body.team) {
        query = `UPDATE project SET team = '${req.body.team}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    if (req.body.taskId) {
        query = `UPDATE project SET task = '${req.body.taskId}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }

    res.status(200).json({ 'message': 'Project updated' });
});

app.delete("/:id", (req, res) => {
    const query = `DELETE FROM project WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ 'message': 'Project deleted' });
    });
});

app.post("/", (req, res) => {
    if (!req.body.name || !req.body.team) return res.status(400).json({ 'message': 'Name and team required' });

    const query = 'INSERT INTO project SET ?';
    const project = {
        name: req.body.name,
        team: req.body.team
    };
    db.query(query, project, (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ 'message': 'New project created' });
    });
});


connection.connect();

app.use(cors());
app.use(bodyParser.json());
connection.connect(() => console.log("Conection finish"))

app.listen(port, host, () => {
  console.log(`Started server: ${host}/${port}`);
});

