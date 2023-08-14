package com.wellsfargo.onlinebank.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "account")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Account {
	@Id
	@Column(name = "account_number")
	@Length(min=10, max=10)
	private long accountNumber;
	@NotNull
	@Column(name="acc_type")
	private String accountType;
	@NotNull
	@Column(name="user_id")
	@Length(min=8,max=20)
	private String userId;
	@NotNull
	@Column(name="password")
	@Length(min=8,max=20)
	private String password;
	@NotNull
	@Column(name="transaction_password")
	@Length(min=8,max=20)
	private String transactionPassword;
	@Column(name="balance")
	private int balance;
	
	
}
