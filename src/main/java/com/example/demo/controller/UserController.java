package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@RestController
@RequestMapping("/users")
public class UserController{
	private final UserRepo userRepo;

	public UserController(UserRepo userRepo) {
		super();
		this.userRepo = userRepo;
	}
	
	@PostMapping
	public ResponseEntity<User> createUser(@RequestBody User user){
		User u = userRepo.save(user);
		return new ResponseEntity<User>(u,HttpStatus.CREATED);
	}
}