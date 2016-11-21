DROP TABLE IF EXISTS `User`;
    
CREATE TABLE `User` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(42) NOT NULL DEFAULT 'user',
  `email` VARCHAR(142) NOT NULL DEFAULT 'user@excample.com',
  `password` VARCHAR(64) NOT NULL DEFAULT 'geheim',
  `role` VARCHAR(23) NOT NULL DEFAULT 'nobody',
  `lang` VARCHAR(123) NOT NULL DEFAULT 'en-EN,',
  `active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
);



DROP TABLE IF EXISTS `Article`;
    
CREATE TABLE `Article` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Title` VARCHAR(123) NOT NULL DEFAULT 'Default Title',
  `Text` MEDIUMTEXT NULL,
  `Lang` VARCHAR(5) NOT NULL DEFAULT 'en-EN',
  `Master_id` INTEGER NOT NULL DEFAULT 0,
  `Date` INTEGER NOT NULL DEFAULT 1479653700 ,
  `Live` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);




DROP TABLE IF EXISTS `whoHasEdit`;
    
CREATE TABLE `whoHasEdit` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `User_id` INTEGER NOT NULL DEFAULT 0,
  `Article_id` INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
);



insert into User (name,email,password,role,Lang,Active) values('bob','bob@bob.bob','$2a$10$A5FQiqGLANY8zf7MiiceteivbK5B2Uk0lRatifL4gSu9BE/dUykQ2','admin','en-EN,de-DE',1);

insert into User (name,email,password,role,Lang,Active) values('alice','alice@bob.bk','$2a$10$A5FQiqGLANY8zf7MiiceteivbK5B2Uk0lRatifL4gSu9BE/dUykQ2','user','en-EN,de-DE,fr-FR',1);

