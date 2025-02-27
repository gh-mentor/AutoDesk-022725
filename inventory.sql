/*
This file contains a script of Transact SQL (T-SQL) command to interact with a database named 'Inventory'.
Requirements:
- referential integrity is enforced
Steps:
1) Check if the database 'Inventory' exists, if it does exist, drop it and create a new one.
2) Set the default database to 'Inventory'.
3) Create a 'suppliers' table. Use the following columns:
- id: integer, primary key
- name: 50 characters, not null
- address: 255 characters, nullable
- city: 50 characters, not null
- state: 2 characters, not null
- zip: 10 characters, not null
4) Create the 'categories' table with a one-to-many relation to the 'suppliers'. Use the following columns:
- id:  integer, primary key
- name: 50 characters, not null
- description:  255 characters, nullable
- supplier_id: int, foreign key references suppliers(id)
5) Create the 'products' table with a one-to-many relation to the 'categories' table. Use the following columns:
- id: integer, primary key
- name: 50 characters, not null
- price: decimal (10, 2), not null
- category_id: int, foreign key references categories(id)
6) Populate the 'suppliers' table with sample data.
7) Populate the 'categories' table with sample data.
8) Populate the 'products' table with sample data.
9) Create a view named 'product_list' that displays the following columns:
- product_id
- product_name
- category_name
- supplier_name
10) Create a stored procedure named 'get_product_list' that returns the product list view.
11) Create a trigger that updates the 'products' table when a 'categories' record is deleted.
12) Create a function that returns the total number of products in a category.
13) Create a function that returns the total number of products supplied by a supplier.
*/

-- Check if the database 'Inventory' exists, if it does exist, drop it and create a new one.
IF DB_ID('Inventory') IS NOT NULL
BEGIN
    DROP DATABASE Inventory;
END
CREATE DATABASE Inventory;

-- Set the default database to 'Inventory'.
USE Inventory;

-- Create a 'suppliers' table.
CREATE TABLE suppliers (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(50) NOT NULL,
    state CHAR(2) NOT NULL,
    zip CHAR(10) NOT NULL,
    update_timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    -- Add a created date column
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP
);





