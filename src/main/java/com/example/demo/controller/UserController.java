package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Account;
import com.example.demo.model.User;
import com.example.demo.repository.AccountRepo;
import com.example.demo.repository.UserRepo;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class UserController{
	private final UserRepo userRepo;
	
	private final AccountRepo accountRepo;
	
	public UserController(UserRepo userRepo, AccountRepo accountRepo) {
		super();
		this.userRepo = userRepo;
		this.accountRepo = accountRepo;
	}

	@PostMapping
	public ResponseEntity<User> createUser(@RequestBody User user){
		User u = userRepo.save(user);
		return new ResponseEntity<User>(u,HttpStatus.CREATED);
	}
	
	@GetMapping("/account/{id}")
	public ResponseEntity<Optional<User> > findUserByAccountId(@PathVariable("id") String id){
		Account account = accountRepo.findById(id).orElse(null);
		if(account!=null) {
			User u = account.getUser();
			Optional<User> ou= Optional.of(u);
			return ResponseEntity.ok(ou);
		}
		return null;
	}
	
	@PutMapping()
	public ResponseEntity<User> updateUser(@RequestBody User user){
		User u = userRepo.save(user);
		return new ResponseEntity<User>(u,HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<User> > findUserById(@PathVariable("id") String id){
		Optional<User> inOptional=userRepo.findById(id);
		return ResponseEntity.ok(inOptional);
	}
	
	@GetMapping("/all")
	public ResponseEntity<Optional<List<User> > > findAllUsers(){
		Optional<List<User> > ou=Optional.of(userRepo.findAll());
		return ResponseEntity.ok(ou);
	}
}