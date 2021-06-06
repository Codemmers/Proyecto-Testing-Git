-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-06-2021 a las 09:49:32
-- Versión del servidor: 5.7.33
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto-testing-git_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `A` int(2) DEFAULT NULL,
  `B` varchar(27) DEFAULT NULL,
  `C` varchar(40) DEFAULT NULL,
  `D` int(1) DEFAULT NULL,
  `E` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`A`, `B`, `C`, `D`, `E`) VALUES
(1, 'Crear base de datos', 'Crear una base de datos para el proyecto', 1, '2021-06-05'),
(2, 'Salir a correr', 'Salir a correr a las 7am mañana', 2, '2021-06-05'),
(3, 'Hacer ejercicio', 'Hacer ejercicio a las 4pm', 3, '2021-06-03'),
(4, 'Hacer reporte', 'Hacer reporte de mi trabajo', 2, '2021-05-18'),
(5, 'Crear api rest', 'Crear api rest para el crud en grupo', 3, '2021-05-20'),
(6, 'Practicar musica', 'Practicar lectura musical', 1, '2021-06-02'),
(7, 'Reparar falla electrica', 'Reparar falla electrica del enchufe', 4, '2021-03-27'),
(8, 'Leer \"El Arte de la guerra\"', 'Leer 2 capitulos del \"Arte de la guerra\"', 4, '2021-02-05'),
(9, 'Dibujar', 'Dibujar mi proyecto de arte', 5, '2021-02-07'),
(10, 'Hacer tarea', 'Hacer mi tarea de biologia', 5, '2021-04-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `A` int(5) DEFAULT NULL,
  `B` varchar(11) DEFAULT NULL,
  `C` varchar(19) DEFAULT NULL,
  `D` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`A`, `B`, `C`, `D`) VALUES
(1, 'NordicR', 'abde12345', '0'),
(2, 'Atlantic_27', 'jklmn772/', '0'),
(3, 'mighty227', 'IlikeChocolate_335/', '0'),
(4, 'noxus416', 'Spaceship/*88', '0'),
(5, 'Alpha725', 'Dontlookback**16', '0'),
(NULL, 'da', 'da@gmail.com', '$2y$07$nnkW.NQ0TMYDv9gO394hxeZFhuXEhsCOsxKdGpYN9VidoRFrhn3ay');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
