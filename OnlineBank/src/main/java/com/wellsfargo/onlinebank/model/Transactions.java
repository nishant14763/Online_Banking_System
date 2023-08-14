package com.wellsfargo.onlinebank.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
@Entity
@Table(name="transactions")
@NoArgsConstructor
@AllArgsConstructor
public class Transactions {
	@Id
	@Column(name="sender_acc_number")
	private long senderAccNumber;
	@NotNull
	@Column(name="reciver_acc_number")
	private long reciverAccNumber;
	@NotNull
	@Column(name="transaction_id")
	private String transactionId;
	@NotNull
	@Column(name="timestamp")
	//@CreationTimestamp
	private String time;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="account_number")
	private Account account;
	
}
