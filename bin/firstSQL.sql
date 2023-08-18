CREATE DATABASE IF NOT EXISTS bank;

USE bank;

CREATE TABLE user(account_number INTEGER PRIMARY KEY,first_name VARCHAR(25) NOT NULL,middle_name VARCHAR(25),last_name VARCHAR(25) NOT NULL,aadhar VARCHAR(12) NOT NULL UNIQUE,pan VARCHAR(10) UNIQUE,dob DATE NOT NULL,primary_address VARCHAR(50) NOT NULL,resdential_address VARCHAR(50) NOT NULL,phone_number VARCHAR(10) NOT NULL,email VARCHAR(30),occupation VARCHAR(50) NOT NULL,admin BOOL);

CREATE TABLE account(account_number INTEGER PRIMARY KEY,FOREIGN KEY(account_number) REFERENCES user(account_number),acc_type ENUM('savings','current','fixed deposit','salary','nri'),user_id VARCHAR(20) NOT NULL,password VARCHAR(20) NOT NULL,transaction_password VARCHAR(20),balance INTEGER);

CREATE TABLE payee(account_number INTEGER PRIMARY KEY,FOREIGN KEY(account_number) REFERENCES user(account_number),to_acc_number INTEGER,FOREIGN KEY(to_acc_number) REFERENCES user(account_number),nick_name VARCHAR(20));

CREATE TABLE transactions(sender INTEGER PRIMARY KEY,FOREIGN KEY(sender) REFERENCES user(account_number),reciver INTEGER NOT NULL,FOREIGN KEY(reciver) REFERENCES user(account_number),timestamp TIMESTAMP NOT NULL,transaction_id VARCHAR(20) UNIQUE NOT NULL,transaction_type ENUM('NEFT','RTGS','IMPS'));
