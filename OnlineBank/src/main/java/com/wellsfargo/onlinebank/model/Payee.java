package com.wellsfargo.onlinebank.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name="payee")
@AllArgsConstructor
@NoArgsConstructor
public class Payee {
	@Id
	@Column(name="account_number")
	private long accountNumber;
	@NotNull
	@Column(name="to_acc_number")
	private long toAccNumber;
	@Column(name="nick_name")
	private String nickName;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="account_number")
	private Account account;
	
	
}
