package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.NewAccount;
import com.example.demo.model.User;

@RestController
@RequestMapping("/api")
public class ProfileController {
    @Autowired
    private NewAccount userService;

    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfile(@AuthenticationPrincipal User userDetails) {
        String username = userDetails.getUserId();
        User user = userService.findById(username);
        return ResponseEntity.ok(user);
    }
    
    @PutMapping("/update-profile")
    public ResponseEntity<String> updateProfile(@RequestBody User updatedUser, @AuthenticationPrincipal UserDetails userDetails) {
        String username = userDetails.getUsername();
        User user = userService.findById(username);

        // Update the user's details with the data from updatedUser
        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        // Update other fields as needed

        userService.saveUser(user);

        return ResponseEntity.ok("Profile updated successfully");
    }
}
