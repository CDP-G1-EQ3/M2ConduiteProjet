CREATE DATABASE IF NOT EXISTS `cdp`;
GRANT ALL ON *.* TO 'cdp'@'%' WITH GRANT OPTION;
GRANT ALL ON *.* TO 'cdp'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE cdp_user (
    id int UNSIGNED AUTO_INCREMENT,
    identifier VARCHAR(24) NOT NULL UNIQUE,
    username VARCHAR(24) NOT NULL,
    mail VARCHAR(64) NOT NULL,
    sha VARCHAR(256) NOT NULL,

    CONSTRAINT PK_ID PRIMARY KEY (id)
);

INSERT INTO `cdp_user`(`identifier`, `username`, `mail`, `sha`) 
        VALUES ("adri", "Adri", "adrien.boitelle@gmail.com", "");