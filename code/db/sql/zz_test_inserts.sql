-- 01

-- 02

INSERT INTO `cdp_user`(`username`, `mail`, `sha`) 
        VALUES ("ArnaudQu", "arnaud.quatreh@hotmail.fr", "C7BE47CEC41C3E5796146E91C7BF037818E9399A");

-- 03

INSERT INTO `cdp_project`(`name_`, `description_`, `ownerid_`) 
        VALUES ("Project 01", "Premier projet", 1);

-- 04

INSERT INTO `cdp_user_project`(`user`, `project`, `role`) 
        VALUES (1,1,"owner");

-- 05

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que x, je souhaite y afin de z",5);

-- 06

INSERT INTO `cdp_sprint`(`project`) 
        VALUES (1);

UPDATE `cdp_us` SET sprint = 1 WHERE project = 1 AND id = 1;

-- 07

INSERT INTO `cdp_sprint_table`(`project`, `sprint`, `title`) 
        VALUES (1, 1, "A faire"),
              (1, 1, "En cours"),
              (1, 1, "Fait");

-- 08

INSERT INTO `cdp_task`(`project`, `title`, `duration`, `us`, `sprint_table`) 
        VALUES (1, "Deja fait", "1 jour", 1, 3),
              (1, "J'y travaille", "2 jours", 1, 2),
              (1, "Pour bientôt", "3 jours", 1, 1),
              (1, "Pas encore défini", "", null, 1);

-- 09

INSERT INTO `cdp_task_dep`(`project`, `task`, `dep`) 
        VALUES (1, 3, 2),
                (1, 2, 1);