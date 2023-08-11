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
	//@Max(value=10)
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
	@Length(min=12,max=12)
	@Column(name="aadhar")
	private String aadharNumber;
	@NotNull
	@Length(min=10,max=10)
	@Column(name="pan")
	private String panNumber;
	@NotNull
	@Column(name="dob")
	private String dob;////string->date
	@NotNull
	@Length(min = 1, max = 250)
	@Column(name="primary_address")
	private String permanentAddress;
	@NotNull
	@Length(min = 1, max = 250)
	@Column(name="resdential_address")
	private String residentialAddress;
	@NotNull
	@Length(min=10,max=10)
	@Column(name="phone_number")
	private String phoneNumber;
	@Column(name = "email")
	@Email
	private String email;
	@NotNull
	@Column(name="occupation")
	private String occupation;
	@Column(name="admin")
	private int isadmin;////bool->intbyte*/
	

}