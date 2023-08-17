package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "payee")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class Payee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="payee_id")
	private int payeeId;
	@Column(name="payee_account_number")
	private int payeeAccountNumber;
	@Column(name="payee_name")
	private String payeeName;
	
	@JsonProperty
	@JsonBackReference
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="account_number")
	private Account account;
}