package com.example.demo.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

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
public class Transaction {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="transaction_id")
	private int transactionId;
	@Column(name="amount")
	private double amount;
	@Column(name="transaction_date")
	private Date transactionDate;
	@Column(name="transaction_type")
	private String transactionType;
	
	@JsonProperty
	@ManyToOne
	@JoinColumn(name="to_account_number")
	private Account toAccount;
	
	@JsonProperty
	@ManyToOne
	@JoinColumn(name="from_account_number")
	private Account fromAccount;
}