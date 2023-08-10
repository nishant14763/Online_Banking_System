package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "transaction")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class transaction {
	private int transactionId;
	private int toAccountNumber;
	private int fromAccountNumber;
	private double amount;
	private Date transactionDate;
	private String transactionType;
}