-- phpMyAdmin SQL Dump
-- version 4.7.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 14, 2018 at 07:43 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `g_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `ID` bigint(20) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `weight` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`ID`, `name`, `weight`, `created_at`, `updated_at`) VALUES
(1, 'X', 3, '2018-04-14 05:12:56', '2018-04-14 05:12:56'),
(4, 'Al-Quran', 2, '2018-04-14 05:14:25', '2018-04-14 05:15:29');

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `ID` bigint(20) NOT NULL,
  `activity_id` bigint(20) NOT NULL,
  `date` int(8) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`ID`, `activity_id`, `date`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 20180411, 1, '2018-04-14 05:18:19', '2018-04-14 05:18:19'),
(3, 1, 20180412, 0, '2018-04-14 05:18:42', '2018-04-14 05:18:42'),
(4, 1, 20180410, 1, '2018-04-14 05:53:34', '2018-04-14 05:53:34'),
(6, 1, 20180409, 1, '2018-04-14 05:53:42', '2018-04-14 05:53:42'),
(7, 1, 20180408, 1, '2018-04-14 05:53:47', '2018-04-14 05:53:47'),
(8, 1, 20180407, 0, '2018-04-14 05:53:52', '2018-04-14 08:07:08'),
(9, 1, 20180406, 1, '2018-04-14 05:53:59', '2018-04-14 05:53:59'),
(10, 1, 20180405, 0, '2018-04-14 05:54:04', '2018-04-14 08:07:01'),
(11, 1, 20180404, 0, '2018-04-14 05:54:09', '2018-04-14 08:06:57'),
(12, 1, 20180403, 1, '2018-04-14 05:54:13', '2018-04-14 05:54:13'),
(13, 1, 20180402, 1, '2018-04-14 05:54:18', '2018-04-14 05:54:18'),
(14, 1, 20180401, 1, '2018-04-14 05:54:22', '2018-04-14 05:54:22'),
(15, 1, 20180331, 1, '2018-04-14 06:27:12', '2018-04-14 06:27:12'),
(16, 1, 20180330, 0, '2018-04-14 06:27:18', '2018-04-14 08:06:54'),
(17, 1, 20180329, 0, '2018-04-14 06:27:24', '2018-04-14 08:07:04'),
(18, 1, 20180328, 0, '2018-04-14 06:27:30', '2018-04-14 08:07:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `name` (`name`) USING BTREE;

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `name_date` (`activity_id`,`date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `ID` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
