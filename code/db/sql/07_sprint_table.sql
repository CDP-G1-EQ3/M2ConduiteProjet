CREATE TABLE cdp_sprint_table (
  project int UNSIGNED NOT NULL,
  sprint int UNSIGNED NOT NULL,
  id int UNSIGNED AUTO_INCREMENT,

  title TEXT NOT NULL,

  INDEX I_PROJECT (project),
  INDEX I_SPRINT (sprint),
  INDEX I_ID (id),
  CONSTRAINT PK_ID PRIMARY KEY (project, sprint, id),
  FOREIGN KEY (project,sprint) 
    REFERENCES cdp_sprint(project,id) 
    ON DELETE CASCADE
);