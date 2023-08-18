package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Transaction;

public interface TransactionRepo extends JpaRepository<Transaction,Integer>{
	Optional<Transaction> findById(String transactionId);
	@Query
	public Optional<Transaction> findBytransactionDate(String transactionDate);
	
}
