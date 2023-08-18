package com.example.demo.Service;

public class TransferRequest {
	private String senderAccountNumber;
	private String receiverAccountNumber;
	public String getSenderAccountNumber() {
		return senderAccountNumber;
	}
	public void setSenderAccountNumber(String senderAccountNumber) {
		this.senderAccountNumber = senderAccountNumber;
	}
	public String getReceiverAccountNumber() {
		return receiverAccountNumber;
	}
	public void setReceiverAccountNumber(String receiverAccountNumber) {
		this.receiverAccountNumber = receiverAccountNumber;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getTransactionDate() {
		return transactionDate;
	}
	public void setTransactionDate(String transactionDate) {
		this.transactionDate = transactionDate;
	}
	public String getTransactionType() {
		return transactionType;
	}
	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}
	private double amount;
	private String transactionDate;
	private String transactionType;
	private String transactionPassword;
	public String getTransactionPassword() {
		return transactionPassword;
	}
	public void setTransactionId(String transactionId) {
		this.transactionPassword = transactionId;
	}
	
}
