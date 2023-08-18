package com.example.demo.model;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.ColumnDefault;

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
	private String userId;
	
	@Column(name="first_name")
	@NotNull(message="Name cann't be true")
	@Size(min=2,message="Name is too short")
	private String firstName;
	
	@Column(name="last_name")
	@NotNull(message="Name cann't be true")
	@Size(min=1,message="Name is too short")
	private String lastName;
	
	@Column(name="email")
	private String email;
	
	@Column(name="mobile")
	@NotNull
	@Size(min=10,max=10,message="Check Length")
	private String mobile;
	
	@Column(name="date_of_birth")
	@NotNull
	private Date dob;
	
	@Column(name="ib_id")
	@NotNull
	private String ibId;
	
	@Column(name="login_password",unique=true)
	@NotNull(message="Please enter Password")
	private String loginPassword;
	
	@Column(name="transaction_password")
	@NotNull(message="Please enter transaction password")
	private String transactionPassword;
	
	@Column(name="address")
	@NotNull(message="Address can't be Null")
	private String address;
	
	@Column(unique=true,name="aadhaar_number")
	@Size(min=12,message="Check Length")
	@NotNull(message="AAdaar is required")
	private String aadhaarNumber;
	
	@Column(name="pan_number",unique=true)
	@NotNull(message="Pan number is required")
	@Size(min=10,message="Check Length")
	private String panNumber;
	
	@Column(name="occupation")
	@NotNull(message="enter occupation")
	private String occupation;
	
	@Column(name="is_admin")
	@NotNull
	@ColumnDefault("0")
	private boolean isAdmin;
	
	public User(String userId, String firstName,String lastName, String email, String mobile, Date dob, String loginPassword, String transactionPassword, String address, 
			String aadharNumber,String panNumber, boolean isAdmin) {
		super();
		this.userId=UUID.randomUUID().toString();
		this.firstName=firstName;
		this.lastName=lastName;
		this.email=email;
		this.aadhaarNumber=aadharNumber;
		this.address=address;
		this.dob=dob;
		this.isAdmin=isAdmin;
		this.loginPassword=loginPassword;
		this.transactionPassword=transactionPassword;
		this.mobile=mobile;
		this.occupation=occupation;
		this.panNumber=panNumber;
		
		
	}
	@JsonProperty("isAdmin")
	public boolean getIsAdmin() {
		return this.isAdmin;
	}
	
	@JsonProperty
	@JsonManagedReference
	@OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	private List<Account> accounts;
}