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

INSERT INTO `cdp_task_dep`(`project`, `task`, `dep`) 
        VALUES (1, 3, 2),
                (1, 2, 1);