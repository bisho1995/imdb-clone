-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2018 at 05:35 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `deltax`
--

-- --------------------------------------------------------

--
-- Table structure for table `actors`
--

CREATE TABLE `actors` (
  `id` int(100) NOT NULL,
  `name` varchar(120) NOT NULL DEFAULT '',
  `sex` varchar(1) NOT NULL DEFAULT 'M',
  `dob` varchar(20) NOT NULL,
  `bio` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actors`
--

INSERT INTO `actors` (`id`, `name`, `sex`, `dob`, `bio`) VALUES
(1, 'Shah Rukh Khan', 'M', '02/11/1965', 'Shah Rukh Khan, also known by the initialism SRK, is an Indian film actor, producer, and television personality. Referred to in the media as the \"Badshah of Bollywood\", \"King of Bollywood\", \"King Khan\", he has appeared in more than 80 Bollywood films, and earned numerous accolades, including 14 Filmfare Awards'),
(2, 'Anushka Sharma', 'F', '01/05/1988', 'Anushka Sharma is an Indian actress and film producer. She has established a career in Hindi films, and is one of the most popular and highest-paid actresses in India. She is the recipient of several awards, including one Filmfare Award from seven nominations.'),
(3, 'Vinay Pathak', 'M', '12/07/1968', 'Vinay Pathak is an Indian actor. He has starred in many films including Khosla Ka Ghosla, Bheja Fry, Island City and Johnny Gaddaar and had a supporting role in high profile movies like Jism and Rab Ne Bana Di Jodi.'),
(4, 'Preity Zinta', 'F', '31/01/1975', 'Preity Zinta is an Indian film actress and entrepreneur. She has appeared in Hindi films of Bollywood, as well as Telugu, Punjabi, and English language films.'),
(5, 'Manmeet Singh', 'M', '29/07/1969', 'Manmeet Singh is a writer and actor, known for Rab Ne Bana Di Jodi (2008), Rang De Basanti (2006) and Band Baaja Baaraat (2010). '),
(8, 'Anil Kapoor', 'M', '24/12/1962', 'Anil Kapoor is an Indian actor and producer and has appeared in many Hindi-language films, as well as international films and television series. His career has spanned almost 40 years as an actor, and as a producer since 2005.'),
(9, 'Sunil Shetty', 'M', '11/08/1961', 'Sunil Veerappa Shetty is an Indian film actor, producer and entrepreneur who is predominantly active in Bollywood films. In a career spanning more than 25 years, he has acted in more than 110 films. His major works have been action and comedy films. He has also acted in Malayalam, Tamil, and English language films.'),
(10, 'Preity Zinta', 'F', '31/01/1975', 'Preity Zinta is an Indian film actress and entrepreneur. She has appeared in Hindi films of Bollywood, as well as Telugu, Punjabi, and English language films.'),
(11, 'Katrina Kaif', 'F', '16/07/1983', 'Katrina Kaif is an English actress who works in Hindi films. Despite receiving mixed reviews from critics for her acting prowess, she has established herself in Bollywood and is one of India\'s highest-paid actresses. Born in Hong Kong, Kaif and her family lived in several countries before she moved to London.'),
(12, 'Ranbir Kapoor', 'M', '28/09/1982', 'Ranbir Kapoor is an Indian actor and film producer. He is one of the highest-paid actors of Hindi cinema and has featured in Forbes India\'s Celebrity 100 list since 2012. Kapoor is the recipient of several awards, including five Filmfare Awards.');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(4) NOT NULL,
  `name` varchar(500) NOT NULL,
  `release_year` varchar(120) NOT NULL,
  `plot` mediumtext NOT NULL,
  `producer` int(4) NOT NULL,
  `poster` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `release_year`, `plot`, `producer`, `poster`) VALUES
(19, 'Rab Ne Bana Di Jodi', '2008', 'Surinder, a simple man, falls for a vivacious Tani and gets married to her. In order to impress her, he undergoes a complete makeover and becomes Raj.', 1, 'https://i.ytimg.com/vi/rAAa7NnTFIQ/maxresdefault.jpg'),
(20, 'Ajab Prem Ki Ghazab Kahani', '2009', 'Prem falls for Jenny, a woman who is already in love with a man named Rahul. Despite this, he agrees to help her marry him and gets into various comical situations as a result.', 5, 'http://www.gstatic.com/tv/thumb/v22vodart/7906592/p7906592_v_v7_aa.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `movie_actors`
--

CREATE TABLE `movie_actors` (
  `movie_id` int(4) NOT NULL,
  `actor_id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie_actors`
--

INSERT INTO `movie_actors` (`movie_id`, `actor_id`) VALUES
(19, 1),
(19, 2),
(19, 3),
(19, 4),
(19, 5),
(20, 11),
(20, 12);

-- --------------------------------------------------------

--
-- Table structure for table `producers`
--

CREATE TABLE `producers` (
  `id` int(4) NOT NULL,
  `name` varchar(120) NOT NULL,
  `sex` varchar(1) NOT NULL DEFAULT 'M',
  `dob` varchar(120) NOT NULL,
  `bio` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `producers`
--

INSERT INTO `producers` (`id`, `name`, `sex`, `dob`, `bio`) VALUES
(1, 'Aditya Chopra', 'M', '21/05/1971', 'Aditya Chopra is an Indian filmmaker. His work as a director includes Dilwale Dulhania Le Jayenge, Mohabbatein, Rab Ne Bana Di Jodi and Befikre. He is also the current Chairman of India\'s multi-national film, media and entertainment conglomerate Yash Raj Films'),
(2, 'Karan Johar', 'M', '25/05/1972', 'Karan Johar, often informally referred to as KJo, is an Indian film director, producer, screenwriter, costume designer, actor and television personality who works in Hindi films. He is the son of Hiroo Johar and the producer Yash Johar.'),
(3, 'Yash Chopra', 'M', '27/09/1932', 'Yash Raj Chopra was an Indian film director and film producer, predominantly working in Hindi cinema. Yash Chopra began his career as an assistant director to I. S. Johar and elder brother, B.R. Chopra.'),
(4, 'Kamal Haasan', 'M', '07/11/1954', 'Kamal Haasan is an Indian film actor, dancer, film director, screenwriter, producer, playback singer, lyricist and politician who works primarily in Tamil cinema. Kamal has won awards including four National Film Awards, the second-most by any Indian actor, and nineteen Filmfare Awards.'),
(5, 'Ronnie Screwvala', 'M', '08/09/1962', 'Rohinton Soli \"Ronnie\" Screwvala is a first generation Indian entrepreneur and philanthropist. He has been named on Esquire\'s List of the 75 Most Influential People of the 21st Century and ranked 78 among the 100 most influential people in the world on the Time 100.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Producer ID constraint` (`producer`);

--
-- Indexes for table `movie_actors`
--
ALTER TABLE `movie_actors`
  ADD PRIMARY KEY (`movie_id`,`actor_id`),
  ADD KEY `Actor ID constraint` (`actor_id`);

--
-- Indexes for table `producers`
--
ALTER TABLE `producers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `producers`
--
ALTER TABLE `producers`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `Producer ID constraint` FOREIGN KEY (`producer`) REFERENCES `producers` (`id`);

--
-- Constraints for table `movie_actors`
--
ALTER TABLE `movie_actors`
  ADD CONSTRAINT `Actor ID constraint` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`),
  ADD CONSTRAINT `Movie ID constraint` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
