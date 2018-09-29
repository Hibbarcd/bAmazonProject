DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
product_name VARCHAR(255), 
department_name VARCHAR(255),
price INT NOT NULL,
stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('War Axe','Blacksmith','35','3');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('WoodCutter Axe','Blacksmith','15','12');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Hatchet','Blacksmith','5','10');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Big Hammer','Blacksmith','25','2');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Small Hammer','Blacksmith','5','14');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Leather Breeches','Tanner','18','12');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Leather Gloves','Tanner','6','5');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Leather Boots','Tanner','10','8');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Chain Shirt','ArmorSmith','55','2');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Ironshod Boots','ArmorSmith','15','8');
INSERT INTO products (product_name, department_name, price, stock_quantity) Values ('Iron Plate','ArmorSmith','235','1');