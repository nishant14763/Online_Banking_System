package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Account;


public interface AccountRepo extends JpaRepository<Account,Integer> {

	public static Account findById(String accountNumber) {
		// TODO Auto-generated method stub
		return null;
	}
}
