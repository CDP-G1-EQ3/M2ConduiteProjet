CREATE TABLE cdp_project (
    id int UNSIGNED AUTO_INCREMENT,
    name_ VARCHAR(64) NOT NULL UNIQUE,
    description_ TEXT NOT NULL,
    ownerid_ int UNSIGNED,

    CONSTRAINT PK_ID PRIMARY KEY (id)
);