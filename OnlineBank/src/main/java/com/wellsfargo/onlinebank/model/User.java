package com.wellsfargo.onlinebank.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import org.hibernate.validator.constraints.Length;

import com.sun.istack.NotNull;

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
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "account_number")
	//@Length(min=10,max=10)
	private long accountNumber;
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
	@Column(name="aadhar_number")
	private String aadharNumber;
	@NotNull
	@Length(min=10,max=10)
	@Column(name="pan_number")
	private String panNumber;
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
	//@Length(min=10,max=10)
	@Column(name="phone_number")
	private long phoneNumber;
	@Column(name = "email")
	@Email
	private String email;
	@NotNull
	@Column(name="occupation")
	private String occupation;
	@Column(name="admin")
	private int isadmin;////bool->intbyte
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="account_number")
	private Account account;

	public User(@Length(min = 1, max = 25) String firstName, String middleName,
			@Length(min = 1, max = 25) String lastName, @Length(min = 12, max = 12) String aadharNumber,
			@Length(min = 10, max = 10) String panNumber, String dob,
			@Length(min = 1, max = 250) String permenentAddress, @Length(min = 1, max = 250) String residentialAddress,
			long phoneNumber, @Email String email, String occupation, int isadmin, Account account) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.aadharNumber = aadharNumber;
		this.panNumber = panNumber;
		this.dob = dob;
		this.permenentAddress = permenentAddress;
		this.residentialAddress = residentialAddress;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.occupation = occupation;
		this.isadmin = isadmin;
		this.account = account;
	}
	

}