DROP TABLE IF EXISTS `User`;
    
CREATE TABLE `User` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(42) NOT NULL DEFAULT 'user',
  `email` VARCHAR(142) NOT NULL DEFAULT 'user@excample.com',
  `password` VARCHAR(64) NOT NULL DEFAULT 'geheim',
  `role` VARCHAR(23) NOT NULL DEFAULT 'nobody',
  PRIMARY KEY (`id`)
);
