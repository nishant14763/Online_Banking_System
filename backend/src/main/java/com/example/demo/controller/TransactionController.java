package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Transaction;
import com.example.demo.repository.TransactionRepo;


@RestController
@RequestMapping("/transactions")
public class TransactionController{
	private final TransactionRepo transactionRepo;

	
	public TransactionController(TransactionRepo transactionRepo) {
		super();
		this.transactionRepo = transactionRepo;
	}

	@PostMapping
	public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction){
		Transaction t =transactionRepo.save(transaction);
		return new ResponseEntity<Transaction>(t,HttpStatus.CREATED);
	}
}