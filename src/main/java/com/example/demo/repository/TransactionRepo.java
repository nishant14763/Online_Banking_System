package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Transaction;

public interface TransactionRepo extends JpaRepository<Transaction,Integer>{
	@Query(value="Select t from Transaction t Where t.toAccount.accountNumber = :accountNumber OR t.fromAccount.accountNumber = :accountNumber Order By t.transactionDate Desc")
	public List<Transaction> findAllByAccountNumber(String accountNumber);

}
