package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ERole;
import com.example.demo.model.Role;

@Repository
public interface RoleRepo extends JpaRepository<Role,Integer>{
	Optional<Role> findByName(ERole name);
}