CREATE TABLE cdp_user_project (
    user int UNSIGNED,
    project int UNSIGNED,
    role ENUM('owner','admin','member'),

    CONSTRAINT PK_ID PRIMARY KEY (user,project)
);

INSERT INTO `cdp_user_project`(`user`, `project`, `role`) 
        VALUES (1,1,"owner");