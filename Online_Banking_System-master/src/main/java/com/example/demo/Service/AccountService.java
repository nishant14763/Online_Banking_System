package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.Account;
import com.example.demo.repository.AccountRepo;

public class AccountService {
	@Autowired
	private AccountRepo accountRepo;
	
	public Account getAccount(String userId) {
		return AccountRepo.findById(userId);
	}
}
