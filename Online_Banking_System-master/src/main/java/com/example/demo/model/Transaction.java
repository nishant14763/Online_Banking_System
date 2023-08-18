package com.example.demo.model;

import java.sql.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

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
	@NotNull
	@Column(name="transaction_id")
	private String transactionId;
	
	@NotNull
	@Column(name="sender_account_number")
	private String senderAccountNumber;
	
	@NotNull
	@Column(name="to_account_number")
	private String reciverAccountNumber;
	
	@Column(name="amount")
	@NotNull
	private double amount;
	
	@NotNull
	@Column(name="transaction_date")
	private Date transactionDate;
	
	@NotNull
	@Column(name="transaction_type")
	private String transactionType;
	
	public Transaction(String transactionId,double amount,Date transactionDate,String transactionType) {
		super();
		this.transactionId=UUID.randomUUID().toString();
		this.amount=amount;
		this.transactionDate=transactionDate;
		this.transactionType=transactionType;
	}
	@JsonProperty
	@ManyToOne
	@JoinColumn(name="to_account_number")
	private Account toAccount;
	
	@JsonProperty
	@ManyToOne
	@JoinColumn(name="from_account_number")
	private Account fromAccount;
}