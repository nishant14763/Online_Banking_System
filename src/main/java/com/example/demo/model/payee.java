package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Table;

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
public class payee {
	private int payeeAccountNumber;
	private String payeeName;
	private int accountNumber;
}