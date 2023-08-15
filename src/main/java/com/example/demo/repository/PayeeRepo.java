package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Payee;

public interface PayeeRepo extends JpaRepository<Payee,Integer> {

}
