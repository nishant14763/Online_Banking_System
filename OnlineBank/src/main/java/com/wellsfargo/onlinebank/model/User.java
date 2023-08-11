package com.wellsfargo.onlinebank.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.Length;
import javax.validation.constraints.Max;

import com.sun.istack.NotNull;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Data

public class User {
	@Id
	@Column(name = "account_number")
	@Max(value=10)
	private int accountNumber;
	@NotNull
	@Length(min = 1, max = 25)
	@Column(name = "first_name")
	private String firstName;
	@Column(name="middle_name")
	private String middleName; 
	@NotNull
	@Length(min =1, max = 25)
	@Column(name = "last_name")
	private String lastName;
	@NotNull
	@Max(value=12)
	@Column(name="aadhar_number")
	private int aadharNumber;
	@NotNull
	@Max(value=9)
	@Column(name="pan_number")
	private int panNumber;
	@NotNull
	@Column(name="dob")
	private String dob;////string->date
	@NotNull
	@Length(min = 1, max = 250)
	@Column(name="permenent_address")
	private String permenentAddress;
	@NotNull
	@Length(min = 1, max = 250)
	@Column(name="residential_address")
	private String residentialAddress;
	@NotNull
	@Length(min=10,max=10)
	@Column(name="phone_number")
	private int phoneNumber;
	@Column(name = "email")
	@Email
	private String email;
	@NotNull
	@Column(name="occupation")
	private String occupation;
	@Column(name="admin")
	private int isadmin;////bool->intbyte
	

}