CREATE SCHEMA IF NOT EXISTS `planetSuperheroesDB` DEFAULT CHARACTER SET utf8 ;
USE `planetSuperheroesDB` ;

CREATE TABLE `categories` (
    `id_category` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(45) NOT NULL
);

CREATE TABLE `roles` (
    `id_role` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(45) NOT NULL
);

CREATE TABLE `products` (
    `id_product` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `discount` INT,
    `stock` INT NOT NULL,
    `image` VARCHAR(255),
    `pages` INT,
    `format` VARCHAR(45),
    `weight` DECIMAL(10, 2),
    `isbn` VARCHAR(45),
    `category_id` INT NOT NULL,
    `calification` INT,
    FOREIGN KEY (`category_id`) REFERENCES `categories` (`id_category`)
);

CREATE TABLE `user` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL UNIQUE,
    `password` VARCHAR(45) NOT NULL,
    `address` VARCHAR(45),
    `image` VARCHAR(255),
    `role_id` INT,
    FOREIGN KEY (`role_id`) REFERENCES `roles` (`id_role`)
);

CREATE TABLE `orders` (
    `id_order` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `state` VARCHAR(45) NOT NULL,
    `order_date` DATE,
    `payment_method` VARCHAR(45) NOT NULL,
    `shipping_method` VARCHAR(45),
    `payment_status` VARCHAR(45),
    `total_amount` DECIMAL(10, 2),
    FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`)
);

CREATE TABLE `order_items` (
    `id_order_items` INT AUTO_INCREMENT PRIMARY KEY,
    `quantity` INT NOT NULL,
    `product_id` INT NOT NULL,
    `order_id` INT NOT NULL,
    FOREIGN KEY (`product_id`) REFERENCES `products` (`id_product`),
    FOREIGN KEY (`order_id`) REFERENCES `orders` (`id_order`)
);
