package com.example.demo.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Account;
import com.example.demo.repository.AccountRepo;

@RestController
@RequestMapping("/accounts")
public class AccountController{
	private final AccountRepo accountRepo;
	
	public AccountController(AccountRepo accountRepo) {
		super();
		this.accountRepo = accountRepo;
	}



	@GetMapping("/{accountNumber}")
	public ResponseEntity<Optional<Account>> findAccountById(@PathVariable("accountNumber") int accountNumber){
		Optional<Account> inOptional=accountRepo.findById(accountNumber);
		return ResponseEntity.ok(inOptional);
	}
}