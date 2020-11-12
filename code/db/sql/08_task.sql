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

INSERT INTO `cdp_task`(`project`, `title`, `duration`, `us`, `sprint_table`) 
        VALUES (1, "Deja fait", "1 jour", 1, 3),
              (1, "J'y travaille", "2 jours", 1, 2),
              (1, "Pour bientôt", "3 jours", 1, 1),
              (1, "Pas encore défini", "", null, 1);