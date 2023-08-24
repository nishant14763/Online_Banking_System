package com.example.demo.payload.response;

import java.sql.Date;
import java.util.List;
import java.util.Set;

import com.example.demo.model.Account;

public class JwtResponse{
	private String token;
	private String type ="Bearer";
	private String username;
	private String firstName;
	private String lastName;
	private String email;
	private String mobile;
	private Date dob;
	private String loginPassword;
	private String transactionPassword;
	private String address;
	private String aadhaarNumber;
	private String panNumber;
	private String occupation;
	private boolean isAdmin;
	private boolean isApproved;
	
	private List<Account> accounts;
	private List<String> role;
	public JwtResponse(String token, String username, String firstName, String lastName, String email, String mobile,
			Date dob, String loginPassword, String transactionPassword, String address, String aadhaarNumber,
			String panNumber, String occupation, boolean isAdmin, boolean isApproved, List<Account> accounts,
			List<String> role) {
		super();
		this.token = token;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobile = mobile;
		this.dob = dob;
		this.loginPassword = loginPassword;
		this.transactionPassword = transactionPassword;
		this.address = address;
		this.aadhaarNumber = aadhaarNumber;
		this.panNumber = panNumber;
		this.occupation = occupation;
		this.isAdmin = isAdmin;
		this.isApproved = isApproved;
		this.accounts = accounts;
		this.role = role;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getLoginPassword() {
		return loginPassword;
	}
	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}
	public String getTransactionPassword() {
		return transactionPassword;
	}
	public void setTransactionPassword(String transactionPassword) {
		this.transactionPassword = transactionPassword;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAadhaarNumber() {
		return aadhaarNumber;
	}
	public void setAadhaarNumber(String aadhaarNumber) {
		this.aadhaarNumber = aadhaarNumber;
	}
	public String getPanNumber() {
		return panNumber;
	}
	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public boolean isAdmin() {
		return isAdmin;
	}
	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
	public boolean isApproved() {
		return isApproved;
	}
	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}
	public List<Account> getAccounts() {
		return accounts;
	}
	public void setAccounts(List<Account> accounts) {
		this.accounts = accounts;
	}
	public List<String> getRole() {
		return role;
	}
	public void setRole(List<String> role) {
		this.role = role;
	}
	
}