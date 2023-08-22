package com.example.demo.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "account")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Account {
	@Id
	@GenericGenerator(name="sequence_account_id", strategy="com.example.demo.idgenerators.AccountNumberGenerator" )
	@GeneratedValue(generator = "sequence_account_id")
	@Column(name="account_number")
	private String accountNumber;
	@Column(name="account_balance",columnDefinition="decimal(15,2) default 0.00")
	private double accountBalance;
	@Column(name="account_type",columnDefinition="varchar(20) default 'Savings' ")
	private String accountType;
	
	@JsonProperty
	@JsonBackReference
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User user;
	
	@JsonProperty
	@JsonManagedReference
	@OneToMany(mappedBy="account",cascade = CascadeType.ALL)
	private List<Payee> payees;
}