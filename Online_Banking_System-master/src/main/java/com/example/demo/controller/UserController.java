package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.LoginRequest;
import com.example.demo.Service.NewAccount;
import com.example.demo.Service.PasswordResetRequest;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController{
	@Autowired
	UserRepo userRepo;
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody User newUser){
		if(userRepo.findById(newUser.getIbId())!=null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("user alraedy exisits");
		}
		userRepo.save(newUser);
		return ResponseEntity.status(HttpStatus.CREATED).body("Registered Successfully");
	}
	
	@PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userRepo.findByIbId(loginRequest.getIbId());

        if (user == null || !user.getLoginPassword().equals(loginRequest.getLogin_password())) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }

        return ResponseEntity.ok("Login successful");
    }
	
	@PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody PasswordResetRequest resetRequest) {
        User user = userRepo.findByEmail(resetRequest.getEmail());
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }
//////email verification
       

        return ResponseEntity.ok("Password reset link sent");
    }

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody PasswordResetRequest resetRequest) {
        User user = userRepo.findByEmail(resetRequest.getEmail());
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        ///////// check token and its expire time

        // Update user's password
        user.setLoginPassword(resetRequest.getNewPassword());
        
        userRepo.save(user);

        return ResponseEntity.ok("Password reset successfully");
    }
	
    @Autowired
    private NewAccount newAccount;

    @PostMapping("/newaccount")
    public ResponseEntity<String> registerNewAccount(@RequestBody User newUser) {
        return newAccount.registerUser(newUser);
    }
	
}