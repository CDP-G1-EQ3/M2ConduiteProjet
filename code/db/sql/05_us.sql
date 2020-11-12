CREATE TABLE cdp_us (
  project int UNSIGNED NOT NULL,
  id int UNSIGNED AUTO_INCREMENT,
  label TEXT NOT NULL,
  difficulty int UNSIGNED NOT NULL,
  sprint int UNSIGNED,

  INDEX I_PROJECT (project),
  INDEX I_ID (ID),
  CONSTRAINT PK_ID PRIMARY KEY (project, id),
  FOREIGN KEY (project) 
    REFERENCES cdp_project(id) 
    ON DELETE CASCADE
);


INSERT INTO `cdp_us`(`project`, `label`, `difficulty`) 
        VALUES (1,"En tant que x, je souhaite y afin de z",5);