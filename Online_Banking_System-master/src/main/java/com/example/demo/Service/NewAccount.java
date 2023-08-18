package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class NewAccount {
    @Autowired
    private UserRepo userRepository;

    public ResponseEntity<String> registerUser(User newUser) {
        // Check if the user already exists by Aadhar or PAN
        if (userRepository.findByAadhar(newUser.getAadhaarNumber()).isPresent()) {
            return ResponseEntity.badRequest().body("User with Aadhar already exists");
        }

        if (userRepository.findByPan(newUser.getPanNumber()).isPresent()) {
            return ResponseEntity.badRequest().body("User with PAN already exists");
        }
        
        

        // Proceed with user registration
        userRepository.save(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }

	public User findById(String username) {
		// TODO Auto-generated method stub
		return userRepository.findById(username).orElse(null);
	}

	public void saveUser(User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
		
	}
    
}

