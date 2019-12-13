-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2019 a las 12:43:48
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `matshop`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_add_product` (IN `newId` TEXT, IN `newTitle` TEXT, IN `newDesc` TEXT, IN `newImageName` TEXT, IN `newPrice` FLOAT(10,2), IN `newRating` INT, IN `newCategory` TEXT)  MODIFIES SQL DATA
BEGIN
INSERT INTO products (product_id, product_title, product_description, product_image_name, product_price, product_rating, product_category)
VALUES(newId, newTitle, newDesc, newImageName, newPrice, newRating, newCategory);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_delete_product` (IN `deleteId` TEXT)  MODIFIES SQL DATA
DELETE fROM products WHERE product_id = deleteId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_products` ()  READS SQL DATA
SELECT * from products$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_products_by_category` (IN `category` TEXT)  READS SQL DATA
SELECT * from products where product_category = category$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_login_user` (IN `loginEmail` TEXT, IN `loginPass` TEXT)  READS SQL DATA
SELECT user_email FROM accounts 
WHERE user_password = loginPass
AND user_email = loginEmail$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_register_user` (IN `newId` TEXT, IN `newFirstName` TEXT, IN `newLastName` TEXT, IN `newEmail` TEXT, IN `newAddress` TEXT, IN `newPassword` TEXT)  MODIFIES SQL DATA
BEGIN
    START TRANSACTION;

        INSERT INTO accounts (user_id,user_email,user_password)
        VALUES (newId,newEmail,newPassword);

        INSERT INTO user_info (user_id,first_name,last_name,user_email,user_address,user_password)
        VALUES (newId,newFirstName,newLastName,newEmail,newAddress,newPassword);

    COMMIT;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_restore_tables` ()  NO SQL
BEGIN

DROP TABLE IF EXISTS accounts,offer_dates,products,user_info;

CREATE TABLE `accounts` (
  `Id` int(11) NOT NULL,
  `user_id` text NOT NULL,
  `user_email` text NOT NULL,
  `user_password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `accounts`
--

INSERT INTO `accounts` (`Id`, `user_id`, `user_email`, `user_password`) VALUES
(2, '4FX3J9', 'jasonwj96@gmail.com', 'pass1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `offer_dates`
--

CREATE TABLE `offer_dates` (
  `Id` int(11) NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_id` text NOT NULL,
  `product_title` text NOT NULL,
  `product_description` text NOT NULL,
  `product_image_name` text NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_rating` int(11) NOT NULL,
  `product_category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `product_id`, `product_title`, `product_description`, `product_image_name`, `product_price`, `product_rating`, `product_category`) VALUES
(1, 'CP2077', 'Cyberpunk 2077 - PC', 'Become a cyberpunk an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City', 'cyberpunk.jpg', '59.99', 100, 'hot'),
(2, '6BD2AL', 'Nintendo Switch with Neon Blue and Neon Red Joy-Con', 'Play your way with the Nintendo Switch gaming system. Whether you’re at home or on the go, solo or with friends, the Nintendo Switch system is designed to fit your life. Dock your Nintendo Switch to enjoy HD gaming on your TV. Heading out? Just undock your console and keep playing in handheld mode', 'switch.jpg', '344.99', 99, 'hot'),
(8, 'UHD65', 'Samsung 65-Inch 4K Smart TV', 'ENHANCED DETAIL WITH HDR: 4K depth of detail with high dynamic range lets you see shades of color that reveal more detail than HDTV can deliver', 'uhdtv.jpg', '597.99', 23, 'hot'),
(10, 'FIT817', 'Fitbit Versa Smart Watch, Black/Black Aluminium', 'Track your all day activity, 24/7 heart rate, & sleep stages, all with a 4 plus day battery life (varies with use and other factors) , Charge time (0 to 100 percent): Two hours . Slim, comfortable design with a lightweight, anodized aluminum watch body', 'fitbit.jpg', '129.99', 87, 'hot'),
(11, 'YEE715', 'Yeezy Boost 350 V2 Black non-reflective', 'Through evolved design elements and advanced technology, the adidas Yeezy Boost 350 V2 lives up to its cults appeal', 'yeezy.jpg', '339.99', 93, 'hot'),
(12, 'SHRP49', 'Sherpa-Lined Icon Denim Jacket', 'Better denim. Better planet. This pair of denim is part of our water-saving Washwell™ program. Compared to conventional wash methods, Washwell™ has saved millions of liters of water since 2016', 'gapjacket.jpg ', '127.99', 76, 'men'),
(13, 'SCK715', 'Colorblock Stripe Crew Socks', 'Soft knit. Ribbing at top. Reinforced toe and heel. Colorblock styling. Allover stripes.', 'gapsocks.jpg', '7.95', 95, 'men'),
(14, 'PS41TB', 'PlayStation 4 Slim 1TB Console', 'All lighter slimmer PS4. 1TB hard drive. All the greatest, games, TV, music and more', 'product3.jpg', '299.99', 73, 'tech'),
(15, 'AAPL11', 'Apple iPhone 11 Pro', 'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro', 'product4.png', '899.99', 98, 'offer'),
(17, 'VRST68', 'Lightweight Varsity Jacket', 'Mens Lightweight Varsity Letterman Jacket Made in USA. Available in 7 different colors', 'product1.jpg', '20.00', 89, 'men'),
(24, 'ALXA42', 'Echo (2nd Generation) International Version – Charcoal Fabric', 'Echo connects to Alexa, a cloud-based voice service, to play music, make calls, set timers and alarms, ask questions, provide information, check weather, manage to-do and shopping lists, control smart home devices, and more', 'echo.jpg', '99.99', 89, 'tech'),
(25, 'AIRP64', 'Apple AirPods with Charging Case (Latest Model)', 'Automatically on, automatically connected. Easy setup for all your Apple devices. Quick access to Siri by saying “Hey Siri”. Double-tap to play or skip forward.', 'airpods.jpg', '234.98', 72, 'tech');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `user_id` text NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `user_email` text NOT NULL,
  `user_address` text NOT NULL,
  `user_password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_info`
--

INSERT INTO `user_info` (`id`, `user_id`, `first_name`, `last_name`, `user_email`, `user_address`, `user_password`) VALUES
(0, 'asdsa', 'sasdsddsd', 'adsddsa', 'sadsadd', 'asdasdssd', 'adsasdsd'),
(0, '4FX3J9', 'Jason', 'Wedderburn', 'jasonwj96@gmail.com', 'Ciudad Belen, Tocumen', 'pass123');

-- --------------------------------------------------------
--
-- Indices de la tabla `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `offer_dates`
--
ALTER TABLE `offer_dates`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accounts`
--
ALTER TABLE `accounts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `offer_dates`
--
ALTER TABLE `offer_dates`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_verify_email` (IN `email` TEXT)  READS SQL DATA
SELECT user_email from accounts where user_email = email$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accounts`
--

CREATE TABLE `accounts` (
  `Id` int(11) NOT NULL,
  `user_id` text NOT NULL,
  `user_email` text NOT NULL,
  `user_password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `accounts`
--

INSERT INTO `accounts` (`Id`, `user_id`, `user_email`, `user_password`) VALUES
(2, '4FX3J9', 'jasonwj96@gmail.com', 'pass1234'),
(8, 'WLIZQR', 'notbatman@gmail.com', 'batman123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_id` text NOT NULL,
  `product_title` text NOT NULL,
  `product_description` text NOT NULL,
  `product_image_name` text NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_rating` int(11) NOT NULL,
  `product_category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `product_id`, `product_title`, `product_description`, `product_image_name`, `product_price`, `product_rating`, `product_category`) VALUES
(1, 'CP2077', 'Cyberpunk 2077 - PC', 'Become a cyberpunk an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City', 'cyberpunk.jpg', '59.99', 100, 'hot'),
(2, '6BD2AL', 'Nintendo Switch with Neon Blue and Neon Red Joy-Con', 'Play your way with the Nintendo Switch gaming system. Whether you’re at home or on the go, solo or with friends, the Nintendo Switch system is designed to fit your life. Dock your Nintendo Switch to enjoy HD gaming on your TV. Heading out? Just undock your console and keep playing in handheld mode', 'switch.jpg', '344.99', 99, 'hot'),
(8, 'UHD65', 'Samsung 65-Inch 4K Smart TV', 'ENHANCED DETAIL WITH HDR: 4K depth of detail with high dynamic range lets you see shades of color that reveal more detail than HDTV can deliver', 'uhdtv.jpg', '597.99', 23, 'hot'),
(10, 'FIT817', 'Fitbit Versa Smart Watch, Black/Black Aluminium', 'Track your all day activity, 24/7 heart rate, & sleep stages, all with a 4 plus day battery life (varies with use and other factors) , Charge time (0 to 100 percent): Two hours . Slim, comfortable design with a lightweight, anodized aluminum watch body', 'fitbit.jpg', '129.99', 87, 'hot'),
(11, 'YEE715', 'Yeezy Boost 350 V2 Black non-reflective', 'Through evolved design elements and advanced technology, the adidas Yeezy Boost 350 V2 lives up to its cults appeal', 'yeezy.jpg', '339.99', 93, 'hot'),
(12, 'SHRP49', 'Sherpa-Lined Icon Denim Jacket', 'Better denim. Better planet. This pair of denim is part of our water-saving Washwell™ program. Compared to conventional wash methods, Washwell™ has saved millions of liters of water since 2016', 'gapjacket.jpg ', '127.99', 76, 'men'),
(13, 'SCK715', 'Colorblock Stripe Crew Socks', 'Soft knit. Ribbing at top. Reinforced toe and heel. Colorblock styling. Allover stripes.', 'gapsocks.jpg', '7.95', 95, 'men'),
(14, 'PS41TB', 'PlayStation 4 Slim 1TB Console', 'All lighter slimmer PS4. 1TB hard drive. All the greatest, games, TV, music and more', 'product3.jpg', '299.99', 73, 'tech'),
(15, 'AAPL11', 'Apple iPhone 11 Pro', 'A transformative triple?camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind?blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro', 'product4.png', '899.99', 98, 'offer'),
(17, 'VRST68', 'Lightweight Varsity Jacket', 'Mens Lightweight Varsity Letterman Jacket Made in USA. Available in 7 different colors', 'product1.jpg', '20.00', 89, 'men'),
(24, 'ALXA42', 'Echo (2nd Generation) International Version – Charcoal Fabric', 'Echo connects to Alexa, a cloud-based voice service, to play music, make calls, set timers and alarms, ask questions, provide information, check weather, manage to-do and shopping lists, control smart home devices, and more', 'echo.jpg', '99.99', 89, 'tech'),
(25, 'AIRP64', 'Apple AirPods with Charging Case (Latest Model)', 'Automatically on, automatically connected. Easy setup for all your Apple devices. Quick access to Siri by saying “Hey Siri”. Double-tap to play or skip forward.', 'airpods.jpg', '234.98', 72, 'tech');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `user_id` text NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `user_email` text NOT NULL,
  `user_address` text NOT NULL,
  `user_password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_info`
--

INSERT INTO `user_info` (`id`, `user_id`, `first_name`, `last_name`, `user_email`, `user_address`, `user_password`) VALUES
(1, '4FX3J9', 'Jason', 'Wedderburn', 'jasonwj96@gmail.com', 'Ciudad Belen, Tocumen', 'pass123'),
(2, 'WLIZQR', 'Bruce', 'Wayne', 'notbatman@gmail.com', 'Wayne Manor', 'batman123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accounts`
--
ALTER TABLE `accounts`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
