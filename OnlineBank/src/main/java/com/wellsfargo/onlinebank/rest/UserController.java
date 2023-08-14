package com.wellsfargo.onlinebank.rest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellsfargo.onlinebank.model.User;
import com.wellsfargo.onlinebank.repository.UserRepo;

@RestController
@RequestMapping("/users")
public class UserController {
	
	private final UserRepo userrepo;
	
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping
	public User createEmployee(@RequestBody User user)
	{
		userRepo.save(user);
		return user;
	}
	
	@GetMapping("/{account_number}")
	public ResponseEntity<Optional<User>> findUserByAccountNumber(@PathVariable("account_number") long account_number) {

		Optional<User> inOptional=userrepo.findById(account_number);
		System.out.println(inOptional);
		return ResponseEntity.ok(inOptional);
	}
	
	@GetMapping("/find/{email}")
	public ResponseEntity<Optional<User>> findUserByEmail(@PathVariable("email") String email) {

		Optional<User> inOptional=userrepo.findByEmail(email);
		System.out.println(inOptional);
		return ResponseEntity.ok(inOptional);
	}
	
	
	

	public UserController(UserRepo userrepo) {
		super();
		this.userrepo = userrepo;
		
	}

	
}