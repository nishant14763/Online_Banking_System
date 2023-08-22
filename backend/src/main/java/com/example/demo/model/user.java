package com.example.demo.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

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
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	private int userId;
	@Column(name="first_name")
	private String firstName;
	@Column(name="last_name")
	private String lastName;
	@Column(name="email")
	private String email;
	@Column(name="mobile",unique=true)
	private String mobile;
	@Column(name="date_of_birth")
	private Date dob;
	@Column(name="login_password")
	private String loginPassword;
	@Column(name="transaction_password",columnDefinition="varchar(6) default '000000' ")
	private String transactionPassword;
	@Column(name="address")
	private String address;
	@Column(name="aadhaar_number")
	private String aadhaarNumber;
	@Column(name="pan_number")
	private String panNumber;
	@Column(name="occupation")
	private String occupation;
	@Column(name="is_admin")
	private boolean isAdmin;
	
	@JsonProperty("isAdmin")
	public boolean getIsAdmin() {
		return this.isAdmin;
	}
	
	@JsonProperty
	@JsonManagedReference
	@OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	private List<Account> accounts;
}