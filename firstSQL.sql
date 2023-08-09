CREATE DATABASE IF NOT EXISTS banking_app;

USE banking_app;

CREATE TABLE IF NOT EXISTS user(user_id INT PRIMARY KEY, first_name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, mobile VARCHAR(20) NOT NULL, date_of_birth DATE NOT NULL, login_password VARCHAR(60) NOT NULL, transaction_password VARCHAR(60) NOT NULL, addres VARCHAR(500) NOT NULL, aadhar_number CHAR(10) NOT NULL, pan_number CHAR(10) NOT NULL, ocupation VARCHAR(50) NOT NULL);

CREATE TABLE IF NOT EXISTS account(
  account_number INT PRIMARY KEY,
  user_id INT,
  account_balance DECIMAL(15,2) NOT NULL,
  account_type VARCHAR(20) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(user_id)
);

CREATE TABLE IF NOT EXISTS payee(
  payee_account_number INT PRIMARY KEY,
  payee_name VARCHAR(100) NOT NULL,
  account_number INT,
  FOREIGN KEY (account_number) REFERENCES account(account_number)
);

CREATE TABLE IF NOT EXISTS transaction(
  transaction_id INT NOT NULL,
  tr_account_number INT NOT NULL,
  amount INT NOT NULL,
  transaction_date DATE NOT NULL,
  transaction_type VARCHAR(10) NOT NULL,
  FOREIGN KEY (tr_account_number) REFERENCES account(account_number)
)