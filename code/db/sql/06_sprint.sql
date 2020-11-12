CREATE TABLE cdp_sprint (
  project int UNSIGNED NOT NULL,
  id int UNSIGNED AUTO_INCREMENT,

  INDEX I_PROJECT (project),
  INDEX I_ID (id),
  CONSTRAINT PK_ID PRIMARY KEY (project, id)
);