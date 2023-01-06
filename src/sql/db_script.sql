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

