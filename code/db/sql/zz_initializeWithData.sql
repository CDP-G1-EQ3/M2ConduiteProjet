INSERT INTO `cdp_user`(`username`, `mail`, `sha`) 
        VALUES ("elhadj", "elhadj@gmail.com",
                "$2b$10$.4K4A4pkbaSekuPR6RFgtue0isN4EdojSDNzRSwyEGx2INSEIGx7y");


INSERT INTO `cdp_user`(`username`, `mail`, `sha`) 
        VALUES ("arnaud", "arnaud@gmail.com",
                "$2b$10$.4K4A4pkbaSekuPR6RFgtue0isN4EdojSDNzRSwyEGx2INSEIGx7y");

INSERT INTO `cdp_project`(`name_`, `description_`) 
        VALUES ("Project elhadj1", "Premier projet");
INSERT INTO `cdp_user_project`(`user`, `project`, `role`) 
        VALUES (1,1,"owner");

INSERT INTO `cdp_project`(`name_`, `description_`) 
        VALUES ("Project elhadj2", "Premier projet");
INSERT INTO `cdp_user_project`(`user`, `project`, `role`) 
        VALUES (1,2,"owner");


INSERT INTO `cdp_project`(`name_`, `description_`) 
        VALUES ("Project arnaud1", "Premier projet");
INSERT INTO `cdp_user_project`(`user`, `project`, `role`) 
        VALUES (2,3,"owner");

INSERT INTO `cdp_project`(`name_`, `description_`) 
        VALUES ("Project arnaud2", "Premier projet");
INSERT INTO `cdp_user_project`(`user`, `project`, `role`) 
        VALUES (2,4,"owner");


INSERT INTO `cdp_us`(`project`, `label`, `difficulty`, `sprint`) 
        VALUES (1,"En tant que a, je souhaite y afin de z",5, 1);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`, `sprint`) 
        VALUES (1,"En tant que b, je souhaite y afin de z",6, 1);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`, `sprint`) 
        VALUES (1,"En tant que b, je souhaite y afin de z",6, 2);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`, `sprint`) 
        VALUES (1,"En tant que b, je souhaite y afin de z",6, 2);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`, `sprint`) 
        VALUES (1,"En tant que c, je souhaite y afin de z",17, 3);
        
INSERT INTO `cdp_us`(`project`, `label`, `difficulty`, `sprint`) 
        VALUES (1,"En tant que c, je souhaite y afin de z",27, 3);


INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que c, je souhaite y afin de z",7);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que c, je souhaite y afin de z",72);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que c, je souhaite y afin de z",2);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que c, je souhaite y afin de z",7);



INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (2,"En tant que a, je souhaite y afin de z",5);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (2,"En tant que b, je souhaite y afin de z",6);
        
INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (2,"En tant que c, je souhaite y afin de z",7);


/* ajout de tâche pour le premier projet */
INSERT INTO `cdp_task`(`project`, `title`, `state`) VALUES (1, "description la tâche 1", "todo");
INSERT INTO `cdp_task`(`project`, `title`, `state`) VALUES (1, "description la tâche 2", "todo");
INSERT INTO `cdp_task`(`project`, `title`, `state`, `us`) VALUES (1, "description la tâche 3", "todo", 4);
INSERT INTO `cdp_task`(`project`, `title`, `state`, `us`) VALUES (1, "description la tâche 4", "todo", 3);
INSERT INTO `cdp_task`(`project`, `title`, `state`, `us`) VALUES (1, "description la tâche 5", "todo", 3);
/* taches faisant réference à d'autres US */
INSERT INTO `cdp_task`(`project`, `title`, `us`, `state`) VALUES (1, "une description 6", 1, "todo");
INSERT INTO `cdp_task`(`project`, `title`, `us`, `state`) VALUES (1, "une description 7", 1, "todo");
INSERT INTO `cdp_task`(`project`, `title`, `us`, `state`) VALUES (1, "une description 8", 2, "todo");

/* ajout de dependances pour quelques tâches */
INSERT INTO `cdp_task_dep`(`project`, `task`, `dep`) VALUES (1, 1, 2);
INSERT INTO `cdp_task_dep`(`project`, `task`, `dep`) VALUES (1, 1, 3);
INSERT INTO `cdp_task_dep`(`project`, `task`, `dep`) VALUES (1, 2, 4);
INSERT INTO `cdp_task_dep`(`project`, `task`, `dep`) VALUES (1, 2, 5);

/* création de sprints pour le prémier projet */
INSERT INTO `cdp_sprint` (`project`, `name`) VALUES (1, "sprint 1");
INSERT INTO `cdp_sprint` (`project`, `name`) VALUES (1, "sprint 2");
INSERT INTO `cdp_sprint` (`project`, `name`) VALUES (1, "sprint 3");