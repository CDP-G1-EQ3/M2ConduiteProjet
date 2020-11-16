CREATE TABLE cdp_task (
  project int UNSIGNED NOT NULL,
  id int UNSIGNED AUTO_INCREMENT,

  title TEXT NOT NULL,
  duration TEXT NOT NULL,
  
  us int UNSIGNED,
  sprint_table int UNSIGNED NOT NULL,

  INDEX I_PROJECT (project),
  INDEX I_ID (id),
  CONSTRAINT PK_ID PRIMARY KEY (project,id),
  FOREIGN KEY (project) 
    REFERENCES cdp_project(id) 
    ON DELETE CASCADE,
  FOREIGN KEY (us) 
    REFERENCES cdp_us(id) 
    ON DELETE CASCADE,
  FOREIGN KEY (project) 
    REFERENCES cdp_sprint_table(id) 
    ON DELETE CASCADE
);