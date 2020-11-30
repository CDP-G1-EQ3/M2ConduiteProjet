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


INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que a, je souhaite y afin de z",5);
INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que b, je souhaite y afin de z",6);
        
INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que c, je souhaite y afin de z",7);


INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (2,"En tant que a, je souhaite y afin de z",5);

INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (2,"En tant que b, je souhaite y afin de z",6);
        
INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (2,"En tant que c, je souhaite y afin de z",7);