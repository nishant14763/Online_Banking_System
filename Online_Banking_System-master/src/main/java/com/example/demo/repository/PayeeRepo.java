package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Payee;


public interface PayeeRepo extends JpaRepository<Payee, String> {
	Optional<Payee> findById(String accountNumber);
	@Query
	public Optional<Payee> findByNickName(String nickName);
}
