CREATE DATABASE IF NOT EXISTS cms_pj COLLATE 'utf8mb4_general_ci';
USE Scafe;
SET @@global.time_zone = "+07:00";
SET GLOBAL information_schema_stats_expiry=0;


CREATE TABLE IF NOT EXISTS customer(
    customerID INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(200) NOT NULL,
    role VARCHAR(200) NOT NULL DEFAULT 'Client',
    email VARCHAR(255) NOT NULL,
    point int NOT NULL
);

CREATE TABLE `menu` (
  menuID INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  price int NOT NULL,
  details varchar(255) NOT NULL
);

CREATE TABLE order_str (
  orderID INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  customerID int NOT NULL,
  numbertable int NOT NULL,
  total int NOT NULL,
  date datetime(6) NOT NULL,
  status VARCHAR(255) NOT NULL
);

CREATE TABLE `payment` (
  paymentID INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  orderID int(11) NOT NULL
);

CREATE TABLE `po` (
  poID INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  customerID int NOT NULL,
  request varchar(255) NOT NULL,
  quanity int(10) NOT NULL,
  totalPO int(11) NOT NULL
);

CREATE TABLE `comment` (
  commentID INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  review varchar(255) NOT NULL
);

CREATE TABLE `discount` (
  discountID INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  reduce int NOT NULL,
  usePoint int NOT NULL
);

CREATE TABLE `Admin` (
  adminID INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(200) NOT NULL,
  role VARCHAR(200) NOT NULL DEFAULT 'Admin'
);

