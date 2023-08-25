CREATE DATABASE IF NOT EXISTS banking_app;

USE banking_app;

CREATE TABLE IF NOT EXISTS USER(
	user_id VARCHAR(25) PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL, 
	last_name VARCHAR(50) NOT NULL, 
	email VARCHAR(100) UNIQUE NOT NULL, 
	mobile VARCHAR(20) UNIQUE NOT NULL, 
	date_of_birth DATE NOT NULL, 
	login_password VARCHAR(500), 
	transaction_password VARCHAR(6), 
	address VARCHAR(500) NOT NULL, 
	aadhaar_number VARCHAR(10) UNIQUE NOT NULL, 
	pan_number VARCHAR(10) UNIQUE NOT NULL, 
	occupation VARCHAR(50) NOT NULL,
	is_approved BOOL NOT NULL,
	is_admin BOOL NOT NULL
);

CREATE TABLE IF NOT EXISTS account(
  account_number VARCHAR(25) PRIMARY KEY,
  user_id VARCHAR(25) NOT NULL,
  account_balance DECIMAL(15,2) NOT NULL,
  account_type VARCHAR(20) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE IF NOT EXISTS payee(
  payee_id INT PRIMARY KEY AUTO_INCREMENT,
  payee_account_number VARCHAR(25) NOT NULL,
  payee_name VARCHAR(100) NOT NULL,
  account_number VARCHAR(25) NOT NULL,
  FOREIGN KEY (account_number) REFERENCES account(account_number)
);

CREATE TABLE IF NOT EXISTS transaction(
  transaction_id INT PRIMARY KEY AUTO_INCREMENT,
  to_account_number VARCHAR(25) NOT NULL,
  from_account_number VARCHAR(25) NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  transaction_date DATE NOT NULL,
  transaction_type VARCHAR(10) NOT NULL,
  FOREIGN KEY (to_account_number) REFERENCES account(account_number),
  FOREIGN KEY (from_account_number) REFERENCES account(account_number)
);

CREATE TABLE if NOT EXISTS role(
 role_id INT PRIMARY KEY Auto_increment,
 role_name ENUM('ROLE_USER','ROLE_ADMIN') NOT NULL
);

INSERT INTO role VALUES (1,'ROLE_USER');
INSERT INTO role VALUES (2,'ROLE_ADMIN');