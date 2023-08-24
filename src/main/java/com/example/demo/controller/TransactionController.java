package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Account;
import com.example.demo.model.Transaction;
import com.example.demo.model.User;
import com.example.demo.repository.AccountRepo;
import com.example.demo.repository.TransactionRepo;
import com.example.demo.repository.UserRepo;


@RestController
@RequestMapping("/transactions")
public class TransactionController{
	private final TransactionRepo transactionRepo;
	private final UserRepo userRepo;
	private final AccountRepo accountRepo;

	public TransactionController(TransactionRepo transactionRepo, UserRepo userRepo, AccountRepo accountRepo) {
		super();
		this.transactionRepo = transactionRepo;
		this.userRepo = userRepo;
		this.accountRepo = accountRepo;
	}

	@PostMapping
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction){
		Account fromAccount = transaction.getFromAccount();
		Account toAccount = transaction.getToAccount();
		if(fromAccount.getAccountBalance()<transaction.getAmount())
		{
			return null;
		}
		else {
			fromAccount.setAccountBalance(fromAccount.getAccountBalance()-transaction.getAmount());
			toAccount.setAccountBalance(toAccount.getAccountBalance()+transaction.getAmount());
			accountRepo.save(fromAccount);
			accountRepo.save(toAccount);
		}
		Transaction t =transactionRepo.save(transaction);
		return new ResponseEntity<Transaction>(t,HttpStatus.CREATED);
	}
	
	@GetMapping("/all/{accountNumber}")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<Optional<List<Transaction> > > getAllTransactionsforAccountNumber(@PathVariable("accountNumber") String accountNumber){
		List<Transaction> lt=transactionRepo.findAllByAccountNumber(accountNumber);
		return ResponseEntity.ok(Optional.of(lt));
	}
	
	@GetMapping("/all/user/{id}")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<Optional<List<Transaction> > > getAllTransactionsforUser(@PathVariable("id") String id){
		User u =userRepo.findById(id).orElse(null);
		if(u!=null) {
			List<Account> la=u.getAccounts();
			List<Transaction> lt = new ArrayList<Transaction>();
			for(Account a:la) {
				List<Transaction> temp=transactionRepo.findAllByAccountNumber(a.getAccountNumber());
				lt.addAll(temp);
			}
			return ResponseEntity.ok(Optional.of(lt));
		}
		return null;
	}
}