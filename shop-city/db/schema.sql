DROP IF EXISTS inventory_db;
CREATE DATABASE inventory_db;
USE inventory_db;

CREATE TABLE inventory
(
	id int NOT NULL AUTO_INCREMENT,
    product_title varchar(255) NOT NULL,
    price float() NOT NULL,
	stock int() NOT NULL,
    seller varchar(50) NOT NULL,
    condition varchar(4),
    details varchar(2000),
    postedDate varchar(20) NOT NULL,
	PRIMARY KEY (id)
);