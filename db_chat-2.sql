-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2023 at 11:21 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_chat`
--

-- --------------------------------------------------------

--
-- Table structure for table `building_`
--

CREATE TABLE `building_` (
  `id` int(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `building_name` varchar(100) NOT NULL,
  `image_link` varchar(100) NOT NULL,
  `map_link` varchar(100) NOT NULL,
  `image_file` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `building_`
--

INSERT INTO `building_` (`id`, `name`, `building_name`, `image_link`, `map_link`, `image_file`) VALUES
(1, 'อาคารบริหาร', 'อาคาร 1', '123.000', 'https://goo.gl/maps/p5FWHYcDC1rYJ6A68', 'qq.png'),
(2, 'อาคารเรียนรวม', 'อาคาร 2', '000.000', 'https://goo.gl/maps/rXv1DfuPxgxe4sV87', '000.png'),
(3, 'อาคารชุดพักอาศัย', 'อาคาร 3', '1', 'https://goo.gl/maps/qsGQdnhSyLsXt6nA9', '1.jpg'),
(4, 'หอพักนิสิตชาย', 'อาคาร 4', '2', 'https://goo.gl/maps/F74PEwcCJfVBkGhJ8', '2.jpg'),
(5, 'หอพักนิสิตหญิง', 'อาคาร 5', '3', 'https://goo.gl/maps/61JjcKmjWFsrAeTR7', '3.jpg'),
(6, 'อาคารปฏิบัติการรวม', 'อาคาร 6', '4', 'https://goo.gl/maps/h2N6TGWdSgFXQ9zh6', '4.jpg'),
(7, 'อาคารวิทยาศาสตร์และเทคโนโลยี', 'อาคาร 7', '5', 'https://goo.gl/maps/bTsSsSiW42NEGvyo8', '5.jpg'),
(8, 'อาคารปฏิบัติการวิศวกรรมเครื่องกล/เทคโนโลยีการอาหาร', 'อาคาร 8 ', '6', 'https://goo.gl/maps/mkdiFCvEvaYLj8m57', '6.jpg'),
(9, 'อาคารเทคโนโลยีสารสนเทศ', 'อาคาร 9', '7', 'https://goo.gl/maps/FJ5nxG7FcykRUbwP7', '7.jpg'),
(10, 'โรงอาหารกลาง', 'อาคาร 10', '8', 'https://goo.gl/maps/RrGD47UENRFm5Dz27', '8.jpg'),
(11, 'โรงกรองน้ำและหอวิทยาเขต', 'อาคาร 11', '9', 'https://goo.gl/maps/7KxiZcXAPhacwpd3A', '9.jpg'),
(12, 'อาคารสนามกีฬา', 'อาคาร 12', '10', 'https://goo.gl/maps/EXGJpdSpdi5zv6Qy8', '10.jpg'),
(13, 'พิพิธภัณฑ์องค์ความรู้', 'อาคาร 13', '11', 'https://goo.gl/maps/mUSEWSjsxPiXrGpw9', '11.jpg'),
(14, 'อาคารวิทยาเขตเฉลิมพระเกียรติ', 'อาคาร 14', '12', 'https://goo.gl/maps/dvpnZFQnE9WTVZ6G7', '12.jpg'),
(15, 'อาคารถิ่นมันในพุทธธรรม', 'อาคาร 15', '15', 'https://goo.gl/maps/R6HJNR9JwK7Bfc6c7', '15.jpg'),
(16, 'อาคารสถานพยาบาล', 'อาคาร 16', '16', 'https://goo.gl/maps/ehSWrdHPEuNb2j4E6', '16.jpg'),
(17, 'อาคารชุดพักอาศัยบุคลากร 2', 'อาคาร 17', '17', 'https://goo.gl/maps/toD2kve9LST6jhnS6', '17.jpg'),
(18, 'หอพักนิสิตหญิงตาลฟ้า', 'อาคาร 18', '18', 'https://goo.gl/maps/2Q4sSQfFfwDbzgvU9', '18.jpg'),
(19, 'อาคารปฏิบัติการด้านวิทยาศาสตร์การกีฬา', 'อาคาร 19 ', '19', 'https://goo.gl/maps/4SwKXtqnKEgZcS6L9', '19.jpg'),
(20, 'อาคารปฏิบัติการด้านวิทยาศาสตร์สุขภาพ', 'อาคาร 20', '20', 'https://goo.gl/maps/BJRTWYhcuSkfT4RC7', '20.jpg'),
(21, 'อาคารปฏิบัติการด้านทรัพยากรสิ่งแวดล้อม', 'อาคาร 21', '21', 'https://goo.gl/maps/wmaTL5HKufbmSpft8', '21.jpg'),
(22, 'อาคารปฏิบัติการและวิจัยทางวิทยาศาสตร์', 'อาคาร 22 ', '22', 'https://goo.gl/maps/buQb8mTSqjT43QjcA', '22.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `conversation_history`
--

CREATE TABLE `conversation_history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `intent` varchar(255) NOT NULL,
  `datetime` datetime NOT NULL,
  `botResponse` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `conversation_history`
--

INSERT INTO `conversation_history` (`id`, `user_id`, `text`, `intent`, `datetime`, `botResponse`) VALUES
(308, 0, '18', 'building18', '2023-08-26 17:57:27', ''),
(309, 0, 'ไปอ่างสกล', 'location21', '2023-08-26 17:58:49', ''),
(310, 0, 'ไปอ่างสกล', 'place9', '2023-08-26 17:59:37', ''),
(311, 0, 'ฟาร์มพืช', 'place6', '2023-08-26 18:00:00', '');

-- --------------------------------------------------------

--
-- Table structure for table `dessert_`
--

CREATE TABLE `dessert_` (
  `id` int(20) NOT NULL,
  `name` varchar(250) NOT NULL,
  `map_link` varchar(250) NOT NULL,
  `image_link` varchar(250) NOT NULL,
  `image_file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `dessert_`
--

INSERT INTO `dessert_` (`id`, `name`, `map_link`, `image_link`, `image_file`) VALUES
(1, 'ไผ่หวาน ', 'https://goo.gl/maps/9uC7nAM5MsphHsdB6', '1', '1.jpg'),
(2, 'ร้านฟองนม', 'https://goo.gl/maps/zkQib3qsG6Q1RaHf7', '2', '2.jpg'),
(3, 'COFFEE BEE', 'https://goo.gl/maps/N6NNSQ6QaZnyp3uTA', '3', '3.jpg'),
(4, 'ภูหวาน', 'https://goo.gl/maps/mShkAZ6Qo9UVGfdt5', '4', '4.jpg'),
(5, 'ชงดึกชงดื่น', 'https://goo.gl/maps/JBMtTne6RcnggHqK6', '5', '5.jpg'),
(6, 'Café Amazon', 'https://goo.gl/maps/TMoMBfgfLyYS7M6C8', '6', '6.jpg'),
(7, 'Checkpoint Fresh Cafe', 'https://goo.gl/maps/M1tRVbaWbeDyvRNTA', '7', '7.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `grilled_shabu`
--

CREATE TABLE `grilled_shabu` (
  `id` int(30) NOT NULL,
  `name` varchar(250) NOT NULL,
  `map_link` varchar(250) NOT NULL,
  `image_link` varchar(250) NOT NULL,
  `image_file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `grilled_shabu`
--

INSERT INTO `grilled_shabu` (`id`, `name`, `map_link`, `image_link`, `image_file`) VALUES
(1, 'ตุ๊ ปุ๊ หมูกระทะ', 'https://goo.gl/maps/F8T9nD9xzfvxuawD8', '1', '1.jpg'),
(2, 'Me หมูกระทะ', 'https://goo.gl/maps/7W7ikP88bvvqKija9', '2', '2.jpg'),
(3, 'จุ่ม ดีย์', 'https://goo.gl/maps/T74ugg5UXpg2Lufy5', '3', '3.jpg'),
(4, 'ร้านแจ่วฮ้อน​ BigMilk', 'https://goo.gl/maps/94jmHhutVdDrvi1m9', '4', '4.jpg'),
(5, 'ชายกะชาม ', 'https://goo.gl/maps/Zn7syeicxg2rqTHD9', '5', '5.jpg'),
(6, 'จ.แจ จิ้มจุ่ม', 'https://goo.gl/maps/Vighzqdddvd3nTgk9', '234', '234'),
(7, 'ร้านล่ะเบ๋อ', 'https://goo.gl/maps/QQdPPsY9TXTP2nTF7', '234', '789'),
(8, 'หมูกระทะ at ห้องสมุด', 'https://goo.gl/maps/aQ3BuCAicgLJfjB58', '234', '231'),
(9, 'ดวงแข เนื้อย่าง สาขา 1', 'https://goo.gl/maps/NdZAZxtwkGt7zweH6', '123', '567');

-- --------------------------------------------------------

--
-- Table structure for table `location_`
--

CREATE TABLE `location_` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `map_link` varchar(250) NOT NULL,
  `image_link` varchar(250) NOT NULL,
  `image_file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `location_`
--

INSERT INTO `location_` (`id`, `name`, `map_link`, `image_link`, `image_file`) VALUES
(1, 'ลานพระพิรุณ', 'https://goo.gl/maps/3q5DtYpqoxR4YGUD7', '1', '000.png'),
(2, 'สวนเสลา-อินทนิลน้ำ', 'https://goo.gl/maps/BogtK1DqJmQdt4bf9', '2', '2.jpg'),
(3, 'ลานปรัชญา', 'https://goo.gl/maps/EoMm5iEVJwRw2YZM7', '3', '3.jpg'),
(4, 'อุทยานธรรมชาติ วิทยาป่าเต็งรัง', 'https://goo.gl/maps/rvL4eBosPiFW4Ku39', '4', '4.jpg'),
(5, 'โรงเรือนแกะ', 'https://goo.gl/maps/HtBPyGqfvAhfGDVLA', '5', '5.jpg'),
(6, 'ฟาร์มพืช', 'https://goo.gl/maps/xYY88KujhkyzYphF8', '6', '6.jpg'),
(7, 'BoxZone.s', 'https://goo.gl/maps/WaTXJ1GerFMvT87S9', '7', '7.jpg'),
(8, 'CSC Sunflower Field', 'https://goo.gl/maps/BMUNj5J6kMiDjoQW9', '8', '8.jpg'),
(9, 'อ่างสกล/ท่าน้ำพงษ์ศักดิ์สุริยวนากุล', 'https://goo.gl/maps/m1iuEdiLmP9e8UuSA', '234', '456'),
(10, 'อุทยานบัว', 'https://goo.gl/maps/ME8KjDh9VNH75BgZ7', '132', '864');

-- --------------------------------------------------------

--
-- Table structure for table `muslim_`
--

CREATE TABLE `muslim_` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `map_link` varchar(250) NOT NULL,
  `image_link` varchar(250) NOT NULL,
  `image_file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `muslim_`
--

INSERT INTO `muslim_` (`id`, `name`, `map_link`, `image_link`, `image_file`) VALUES
(1, 'ร้านอาหารอิสลามมะห์มาเรียม', 'https://goo.gl/maps/C1MeUA6RjRoxnwTA6', '123.000', '000.png'),
(2, 'ครัวอามีนะห์ นาอ้อย(สกลนคร)', 'https://goo.gl/maps/uAhondBCxUovp2R68', '234', '455');

-- --------------------------------------------------------

--
-- Table structure for table `noodles_`
--

CREATE TABLE `noodles_` (
  `id` int(30) NOT NULL,
  `name` varchar(250) NOT NULL,
  `map_link` varchar(250) NOT NULL,
  `image_link` varchar(250) NOT NULL,
  `image_file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `noodles_`
--

INSERT INTO `noodles_` (`id`, `name`, `map_link`, `image_link`, `image_file`) VALUES
(1, 'ร้านเจ้นางหลังมอ', 'https://goo.gl/maps/EHT1mU5qZjwmcNaY9', '234', '567'),
(2, 'ร้านเตี๋ยวเตี๋ยว', 'https://goo.gl/maps/ZqKWAPFZZVVRu8f18', '123', '456'),
(3, 'ร้านอาหารจันทร์มณี', 'https://goo.gl/maps/mtbcmMrm7PbykzqU9', '156', '798'),
(4, 'ร้านก๋วยเตี๋ยวแคป หมูยายเพ็ญ สาขา1', 'https://goo.gl/maps/HLmgZ2ouMKLNeEZx8', '213', '897'),
(5, 'ก๋วยเตี๋ยว​บ้านบ้าน', 'https://goo.gl/maps/uRpY7jRfwn1ynyxW8', '324', '231');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy_`
--

CREATE TABLE `pharmacy_` (
  `id` int(30) NOT NULL,
  `name` varchar(250) NOT NULL,
  `map_link` varchar(250) NOT NULL,
  `image_link` varchar(250) NOT NULL,
  `image_file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `pharmacy_`
--

INSERT INTO `pharmacy_` (`id`, `name`, `map_link`, `image_link`, `image_file`) VALUES
(1, 'ร้านยาหน้ามอ (ยาชุมชนเภสัชกร)', 'https://goo.gl/maps/1gk1PjNAmETU1YM77', '222', '333');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_`
--

CREATE TABLE `restaurant_` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `map_link` varchar(250) NOT NULL,
  `image_link` varchar(250) NOT NULL,
  `image_file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `restaurant_`
--

INSERT INTO `restaurant_` (`id`, `name`, `map_link`, `image_link`, `image_file`) VALUES
(1, 'ครัวเจ๊แหม่ม อาหาร ตามสั่ง', 'https://goo.gl/maps/R3RAs5kfuUTFNNw57', '222', '777'),
(2, 'ร้านป้านกอาหารตามสั่ง', 'https://goo.gl/maps/h1u23wgco5iYr7wN9', '058', '654'),
(3, 'กล่อง กับข้าว ChaaGuChill', 'https://goo.gl/maps/HqvGXmiPAfigjG3UA', '453', '132'),
(4, 'ร้านข้าวเหนียวหมู ห่อ', 'https://goo.gl/maps/SheeFXzVMAJVA5cCA', '233', '455'),
(5, 'ร้านป้าอร อร่อยเด็ด!', 'https://goo.gl/maps/sYhH35m9Jd5VzLpt5', '232', '345'),
(6, 'ครัวรุ่งฟ้า', 'https://goo.gl/maps/VrRV7sL1UnvVTSjn9', '345', '789');

-- --------------------------------------------------------

--
-- Table structure for table `room_`
--

CREATE TABLE `room_` (
  `id` int(30) NOT NULL,
  `name` varchar(250) NOT NULL,
  `map_link` varchar(250) NOT NULL,
  `image_link` varchar(250) NOT NULL,
  `image_file` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `room_`
--

INSERT INTO `room_` (`id`, `name`, `map_link`, `image_link`, `image_file`) VALUES
(1, 'ห้องแลป', 'https://goo.gl/maps/buQb8mTSqjT43QjcA', '233', '233'),
(2, 'ห้อง ก.ย.ศ', 'https://goo.gl/maps/FJ5nxG7FcykRUbwP7', '123', '456'),
(3, 'ห้องบริการคอมพิวเตอร์', 'https://goo.gl/maps/FJ5nxG7FcykRUbwP7', '456', '789'),
(4, 'ห้องสมุด', 'https://goo.gl/maps/FJ5nxG7FcykRUbwP7', '986', '098'),
(5, 'ห้องรพี', 'https://goo.gl/maps/FJ5nxG7FcykRUbwP7', '098', '564'),
(6, 'ห้องสว่าง', 'https://goo.gl/maps/bTsSsSiW42NEGvyo8', '234', '567');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `urole` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `urole`, `created_at`) VALUES
(1, 'Ponchanistha', 'Sawangarom', 'a.1@email.com', '$2y$10$XMDM2I0J4WjO0TtOD5vNs.nZtzN6adsUUSaXwbSVnGo.CIhS9qQum', 'admin', '2023-04-18 21:51:54'),
(2, 'Ponchanistha', 'Sawangarom', 'a.2@email.com', '$2y$10$I5tmamI6bCyhl9881qEU6.lN00s47fqVC42E6MBaopIj.XTFKQDEi', 'admin', '2023-04-18 22:27:46'),
(7, 'Ponchanistha', 'Sawangarom', 'a.6@email.com', '$2y$10$03yjnQhB3FBnr75q4YbfQON/q/Tk9fuptUd33CiWyfBVhlIbL8VDS', 'admin', '2023-08-05 11:44:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `building_`
--
ALTER TABLE `building_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conversation_history`
--
ALTER TABLE `conversation_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dessert_`
--
ALTER TABLE `dessert_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grilled_shabu`
--
ALTER TABLE `grilled_shabu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location_`
--
ALTER TABLE `location_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `muslim_`
--
ALTER TABLE `muslim_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `noodles_`
--
ALTER TABLE `noodles_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pharmacy_`
--
ALTER TABLE `pharmacy_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant_`
--
ALTER TABLE `restaurant_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_`
--
ALTER TABLE `room_`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `building_`
--
ALTER TABLE `building_`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `conversation_history`
--
ALTER TABLE `conversation_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=312;

--
-- AUTO_INCREMENT for table `dessert_`
--
ALTER TABLE `dessert_`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `grilled_shabu`
--
ALTER TABLE `grilled_shabu`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `location_`
--
ALTER TABLE `location_`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `muslim_`
--
ALTER TABLE `muslim_`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `noodles_`
--
ALTER TABLE `noodles_`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pharmacy_`
--
ALTER TABLE `pharmacy_`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `restaurant_`
--
ALTER TABLE `restaurant_`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `room_`
--
ALTER TABLE `room_`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
