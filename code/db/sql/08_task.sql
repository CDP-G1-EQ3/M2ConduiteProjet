CREATE TABLE cdp_task (
  id int UNSIGNED AUTO_INCREMENT,
  project int UNSIGNED NOT NULL,
  title TEXT NOT NULL,
  duration TEXT,
  state ENUM('todo', 'doing', 'done'),
  us int UNSIGNED,

  INDEX I_PROJECT (project),
  INDEX I_ID (id),
  CONSTRAINT PK_ID PRIMARY KEY (project,id),
  FOREIGN KEY (project) 
    REFERENCES cdp_project(id) 
    ON DELETE CASCADE,
  FOREIGN KEY (us) 
    REFERENCES cdp_us(id) 
    ON DELETE CASCADE
);