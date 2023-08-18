package com.example.demo.Service;

public class PasswordResetRequest {
	private String email;
	private String newPassword;

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPasswod(String newPassword) {
		this.newPassword = newPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
