# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sup
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sup` ;

-- -----------------------------------------------------
-- Schema sup
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sup` DEFAULT CHARACTER SET utf8 ;
USE `sup` ;

-- -----------------------------------------------------
-- Table `sup`.`artifact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`artifact` ;

CREATE TABLE IF NOT EXISTS `sup`.`artifact` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`task` ;

CREATE TABLE IF NOT EXISTS `sup`.`task` (
  `id` INT NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `deadline` DATETIME NULL DEFAULT NULL,
  `artifact_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_task_artifact1_idx` (`artifact_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_artifact1`
    FOREIGN KEY (`artifact_id`)
    REFERENCES `sup`.`artifact` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`member` ;

CREATE TABLE IF NOT EXISTS `sup`.`member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_member_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `sup`.`task` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`project` ;

CREATE TABLE IF NOT EXISTS `sup`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `team` VARCHAR(45) NULL DEFAULT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_project_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `sup`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`role` ;

CREATE TABLE IF NOT EXISTS `sup`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_role_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_role_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `sup`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`team`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`team` ;

CREATE TABLE IF NOT EXISTS `sup`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `icon` BLOB NULL DEFAULT NULL,
  `memberList` VARCHAR(45) NULL DEFAULT NULL,
  `project_id` INT NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_team_project_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_team_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `sup`.`member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_team_project`
    FOREIGN KEY (`project_id`)
    REFERENCES `sup`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`user` ;

CREATE TABLE IF NOT EXISTS `sup`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `isAdmin` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_user_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `sup`.`member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `sup`.`artifact`
-- -----------------------------------------------------
START TRANSACTION;
USE `sup`;
INSERT INTO `sup`.`artifact` (`id`, `name`, `description`) VALUES (1, 'uno', '12345');
INSERT INTO `sup`.`artifact` (`id`, `name`, `description`) VALUES (2, 'doss', '67890');
INSERT INTO `sup`.`artifact` (`id`, `name`, `description`) VALUES (3, 'tress', '123456789');

COMMIT;


-- -----------------------------------------------------
-- Data for table `sup`.`task`
-- -----------------------------------------------------
START TRANSACTION;
USE `sup`;
INSERT INTO `sup`.`task` (`id`, `description`, `deadline`, `artifact_id`) VALUES (5, 'smth1', '2023-01-15', 1);
INSERT INTO `sup`.`task` (`id`, `description`, `deadline`, `artifact_id`) VALUES (6, 'smth2', '2023-01-15', 2);
INSERT INTO `sup`.`task` (`id`, `description`, `deadline`, `artifact_id`) VALUES (7, 'smt3', '2023-01-15', 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `sup`.`project`
-- -----------------------------------------------------
START TRANSACTION;
USE `sup`;
INSERT INTO `sup`.`project` (`id`, `name`, `team`, `task_id`) VALUES (DEFAULT, 'weatherApp', 'one', 5);
INSERT INTO `sup`.`project` (`id`, `name`, `team`, `task_id`) VALUES (DEFAULT, 'parsing', 'three', 7);
INSERT INTO `sup`.`project` (`id`, `name`, `team`, `task_id`) VALUES (DEFAULT, 'dataBase', 'two', 6);

COMMIT;


```

## RESTfull сервіс для управління даними

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
