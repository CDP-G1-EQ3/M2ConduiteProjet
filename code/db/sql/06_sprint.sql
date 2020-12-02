CREATE TABLE cdp_sprint (
  id int UNSIGNED AUTO_INCREMENT,
  project int UNSIGNED NOT NULL,
  name TEXT NOT NULL,
  state ENUM('finished', 'active'),
  startDate DATE,
  endDate DATE,


  INDEX I_PROJECT (project),
  INDEX I_ID (id),
  CONSTRAINT PK_ID PRIMARY KEY (project, id)
);