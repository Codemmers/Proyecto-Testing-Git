-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 07-06-2021 a las 03:56:59
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `id` int(11) NOT NULL,
  `task_name` varchar(27) DEFAULT NULL,
  `task_description` varchar(40) NOT NULL,
  `user_id` int(11) NOT NULL,
  `task_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `task_name`, `task_description`, `user_id`, `task_date`) VALUES
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
  `id` int(5) NOT NULL,
  `user_name` varchar(11) NOT NULL,
  `user_email` varchar(19) NOT NULL,
  `user_pass` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_email`, `user_pass`) VALUES
(1, 'Daniel', 'rzl@gmail.com', '$2y$07$E/nWbG7llPBK.sC/SoVxQepBGSI.ls35t0MHVWVu5w.YEJX2ORari'),
(2, 'Lucas', 'abcde@gmail.com', '$2y$07$MkoqArswKvlI1lotuythDe1baX2JvW8xNMoDCdYsezgC.LprmGNhy'),
(3, 'James', 'flag@gmail.com', '$2y$07$4bt35s0nGPMPvD3VxUcuq.HMSkA1OYR1badkmDNvxv7djO.3x5lYC'),
(4, 'juan', 'Alex@outlook.com', '$2y$07$WUB6zj3ALMoggl6CML9SpOgR9IFXAL5C6ZtvhhmiwM0Q4SddQoLxa'),
(5, 'gabriel', 'gabriel@gmail.com', '$2y$07$/JWFotgJACAkOGUP2LnAS.asLcD3lDG00FVQyVOov2zLUxFn8ezci'),
(6, 'gabriel', 'gabriel@gmail.com', '$2y$07$lNdp2I2wFvEVE3HGPp6LTOJTNaBa3bJZjp7RItS2TiujmBF1cWlju'),
(7, 'Dante', 'zxt@gmail.com', '$2y$07$3DqXKwTFuFn469WsN/iVDeM7Lt2s/VvX0E3ffjasopL9uVQ.ZgtSm'),
(8, 'John', 'adamant@gmail.com', '$2y$07$4qokwroM/KC0.uDkNinKWOcIHaNSmwTsAF20wRcFylBp8P1o5.2vm'),
(9, 'Clark Steel', 'clark@gmail.com', '$2y$07$JIG6Fg6Z8g4EbZLMaRr5/OvUM19INouLXr6ItE4ZMTzm9Rpa62ySy');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
