CREATE TABLE cdp_task_dep (
  project int UNSIGNED NOT NULL,
  task int UNSIGNED NOT NULL,
  dep int UNSIGNED NOT NULL,

  CONSTRAINT PK_ID PRIMARY KEY (project,task,dep),
  FOREIGN KEY (project) 
    REFERENCES cdp_project(id) 
    ON DELETE CASCADE,
  FOREIGN KEY (task) 
    REFERENCES cdp_task(id) 
    ON DELETE CASCADE,
  FOREIGN KEY (dep) 
    REFERENCES cdp_task(id) 
    ON DELETE CASCADE
);