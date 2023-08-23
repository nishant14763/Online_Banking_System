package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Role;
import com.example.demo.model.Roles;




public interface RoleRepo extends JpaRepository<Role, Long> {
	Optional<Role> findByName(Roles name);
}