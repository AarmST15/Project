-- Warning this code for set up database only 
-- and WILL DELETE ALL DATA IN DATABASE TESTcms_pj
-- create database TESTcms_pj
DROP DATABASE IF EXISTS TESTcms_pj;

CREATE DATABASE IF NOT EXISTS TESTcms_pj COLLATE 'utf8mb4_general_ci';

USE TESTcms_pj;

SET @@global.time_zone = "+07:00";
-- SET GLOBAL information_schema_stats_expiry=0;

-- table customer
DROP TABLE IF EXISTS customer;

CREATE TABLE IF NOT EXISTS customer(
    id_customer  INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    psw VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    point INT NOT NULL DEFAULT 0

);

-- ALTER TABLE customer AUTO_INCREMENT=4576;

-- table order_str
DROP TABLE IF EXISTS order_str;

CREATE TABLE IF NOT EXISTS order_str(
    id_order   INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_customer INTEGER UNSIGNED NOT NULL, 
    num_table VARCHAR(20) NOT NULL,
    total INT NOT NULL,
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- FK
     CONSTRAINT `fk_id_customer_customer_order_str` FOREIGN KEY(id_customer) REFERENCES customer(id_customer) ON DELETE CASCADE ON UPDATE RESTRICT

);


-- table menu
DROP TABLE IF EXISTS menu;

CREATE TABLE IF NOT EXISTS menu(
    id_menu  INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    n_menu VARCHAR(30) NOT NULL, 
    type VARCHAR(20) NOT NULL,
    price INT NOT NULL,
    details VARCHAR(200) NOT NULL,
    img VARCHAR(100)  NOT NULL

    -- FK
    -- CONSTRAINT `fk_id_customer_customer_order_str` FOREIGN KEY(id_customer) REFERENCES customer(id_customer) ON DELETE CASCADE ON UPDATE RESTRICT

);


-- table po
DROP TABLE IF EXISTS po;

CREATE TABLE IF NOT EXISTS po(
    id_po    INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_menu INTEGER UNSIGNED NOT NULL, 
    id_order INTEGER UNSIGNED NOT NULL, 
    s_req VARCHAR(20) NOT NULL,
    quanity INT NOT NULL,
    total DATETIME NOT NULL,

    -- FK
     CONSTRAINT `fk_id_menu_menu_po` FOREIGN KEY(id_menu) REFERENCES menu(id_menu) ON DELETE CASCADE ON UPDATE RESTRICT,
     CONSTRAINT `fk_id_order_menu_po` FOREIGN KEY(id_order) REFERENCES order_str(id_order) ON DELETE CASCADE ON UPDATE RESTRICT

);

-- table payment
DROP TABLE IF EXISTS payment;

CREATE TABLE IF NOT EXISTS payment(
    id_payment    INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_order INTEGER UNSIGNED NOT NULL, 
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- FK
     CONSTRAINT `fk_id_order_menu_payment` FOREIGN KEY(id_order) REFERENCES order_str(id_order) ON DELETE CASCADE ON UPDATE RESTRICT

);
