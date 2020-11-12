CREATE TABLE cdp_user_project (
    user int UNSIGNED,
    project int UNSIGNED,
    role ENUM('owner','admin','member'),

    CONSTRAINT PK_ID PRIMARY KEY (user,project)
);