-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 24 Novembre 2015 à 00:50
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `farming`
--

-- --------------------------------------------------------

--
-- Structure de la table `saves`
--

CREATE TABLE IF NOT EXISTS `saves` (
  `ID` int(11) NOT NULL,
  `argent` int(11) NOT NULL,
  `carottes` int(11) NOT NULL,
  `avocats` int(11) NOT NULL,
  `nbChampsCarottes` int(11) NOT NULL,
  `nbChampsAvocats` int(11) NOT NULL,
  `victoire` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `saves`
--

INSERT INTO `saves` (`ID`, `argent`, `carottes`, `avocats`, `nbChampsCarottes`, `nbChampsAvocats`, `victoire`) VALUES
(1, 5, 2, 0, 1, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
