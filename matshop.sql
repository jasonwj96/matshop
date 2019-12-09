CREATE TABLE `matshop`.`products` ( `id` INT NOT NULL AUTO_INCREMENT , `product_id` VARCHAR(255) NOT NULL , `product_url` VARCHAR(255) NOT NULL , `title` VARCHAR(255) NOT NULL , `description` VARCHAR(255) NOT NULL , `alt` VARCHAR(255) NOT NULL , `rating` INT(255) NOT NULL , `price` DECIMAL(2) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

`root`@`localhost`