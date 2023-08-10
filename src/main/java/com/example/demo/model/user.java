package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;
import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class user {
	@Id
	@Column(name="user_id")
	private int userId;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="email")
	private String email;
	@Column(name="mobile")
	private String mobile;
	@Column(name="date_of_birth")
	private Date dob;
	@Column(name="login_password")
	private String loginPassword;
	@Column(name="transaction_password")
	private String transactionPassword;
	@Column(name="address")
	private String address;
	@Column(name="addhar_number")
	private String addhar;
	@Column(name="pan_number")
	private String pan;
	@Column(name="occupation")
	private String occupation;
	@Column(name="is_admin")
	private boolean isAdmin;
}