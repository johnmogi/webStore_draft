-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 05, 2020 at 07:46 AM
-- Server version: 10.4.12-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PortfolioProject`
--
CREATE DATABASE IF NOT EXISTS `PortfolioProject` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `PortfolioProject`;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cartID` int(10) NOT NULL,
  `userID` int(10) NOT NULL,
  `cartTime` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cartID`, `userID`, `cartTime`) VALUES
(1, 23, '2020-05-30 19:56:34.000000'),
(2, 23, '2020-05-30 20:04:21.215000'),
(3, 23, '2020-05-30 20:37:45.000000');

-- --------------------------------------------------------

--
-- Table structure for table `cartItem`
--

CREATE TABLE `cartItem` (
  `itemID` int(10) NOT NULL,
  `productID` int(10) NOT NULL,
  `amount` int(40) NOT NULL,
  `totalPrice` int(10) NOT NULL,
  `cartID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartItem`
--

INSERT INTO `cartItem` (`itemID`, `productID`, `amount`, `totalPrice`, `cartID`) VALUES
(13, 2, 1, 1000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `catID` int(10) NOT NULL,
  `catName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`catID`, `catName`) VALUES
(1, 'landing pages');

-- --------------------------------------------------------

--
-- Table structure for table `clientOrder`
--

CREATE TABLE `clientOrder` (
  `orderID` int(10) NOT NULL,
  `clientID` int(10) NOT NULL,
  `cartID` int(10) NOT NULL,
  `subTotal` int(10) NOT NULL,
  `shippingCity` varchar(40) NOT NULL,
  `shippingStreet` varchar(40) NOT NULL,
  `shippingDate` date NOT NULL,
  `orderTime` date NOT NULL,
  `paymentDigits` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(10) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `catID` int(10) NOT NULL,
  `price` varchar(10) NOT NULL,
  `imageUrl` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `productName`, `catID`, `price`, `imageUrl`) VALUES
(1, 'a', 1, 'a', 'a'),
(2, 'b', 1, '1000', 'a'),
(3, '33', 1, '33', '33'),
(4, 'Mockup', 1, '1800', 'mockup.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userID` int(10) NOT NULL,
  `userFirstName` varchar(50) NOT NULL,
  `userLastName` varchar(50) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `password` varchar(200) NOT NULL,
  `city` varchar(20) NOT NULL,
  `streetAddress` varchar(50) NOT NULL,
  `id` int(9) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `userFirstName`, `userLastName`, `userName`, `password`, `city`, `streetAddress`, `id`, `isAdmin`) VALUES
(22, '7', '7', '7', '89d7149eb47ea80748a0abd7cdaf1e87a81e0c36b1305b5538469b909c18c526ec778ee27d7d49345db966eddc3399f50b8b5e39d3ee80210a1b3d89345821fc', '7', '7', 123456789, 0),
(23, '1', '1', '1', 'c7986595cce243c20c7c60894e8640173441b3c7e1908c50d94ea9959b6d2f91a70981e8645b8f987f99370ee67788aa5686826b8cd178bbbea4cddadb71f4cc', '1', '1', 987654321, 1),
(24, '3', '3', '3', '3631724678ecf22f3e5e66c60a0a460efb0931d8ccb78791140eb082e00e2acfd7c2531c7d5d7d988e69b80fffbbf9c151ef29ce4b790567356c6617972cb929', '3', '3', 123456123, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `cartItem`
--
ALTER TABLE `cartItem`
  ADD PRIMARY KEY (`itemID`),
  ADD KEY `productID` (`productID`),
  ADD KEY `cartID` (`cartID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`catID`);

--
-- Indexes for table `clientOrder`
--
ALTER TABLE `clientOrder`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `clientID` (`clientID`),
  ADD KEY `cartID` (`cartID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `catID` (`catID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cartItem`
--
ALTER TABLE `cartItem`
  MODIFY `itemID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `catID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `clientOrder`
--
ALTER TABLE `clientOrder`
  MODIFY `orderID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cartItem`
--
ALTER TABLE `cartItem`
  ADD CONSTRAINT `cartItem_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `products` (`productID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cartItem_ibfk_2` FOREIGN KEY (`cartID`) REFERENCES `cart` (`cartID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`catID`) REFERENCES `products` (`catID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `clientOrder`
--
ALTER TABLE `clientOrder`
  ADD CONSTRAINT `clientOrder_ibfk_1` FOREIGN KEY (`clientID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clientOrder_ibfk_2` FOREIGN KEY (`cartID`) REFERENCES `cart` (`cartID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
