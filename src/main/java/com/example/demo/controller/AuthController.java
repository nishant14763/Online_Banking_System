package com.example.demo.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ERole;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.payload.request.LoginRequest;
import com.example.demo.payload.request.SignupRequest;
import com.example.demo.payload.response.JwtResponse;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.RoleRepo;
import com.example.demo.repository.UserRepo;
import com.example.demo.security.jwt.JwtUtils;
import com.example.demo.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepo userRepository;

  @Autowired
  RoleRepo roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);
    
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();    
    List<String> roles = userDetails.getAuthorities().stream()
    		.map(item -> item.getAuthority())
            .collect(Collectors.toList());
    
    if (!userDetails.isApproved()) {
        return ResponseEntity
            .badRequest()
            .body(new MessageResponse("Error: User has not been approved!"));
      }

        return ResponseEntity.ok(new JwtResponse(jwt,  
                             userDetails.getUsername(),
                             userDetails.getFirstName(),
                             userDetails.getLastName(),
                             userDetails.getEmail(),
                             userDetails.getMobile(),
                             userDetails.getDob(),
                             userDetails.getPassword(),
                             userDetails.getTransactionPassword(),
                             userDetails.getAddress(),
                             userDetails.getAadhaarNumber(),
                             userDetails.getPanNumber(),
                             userDetails.getOccupation(),
                             userDetails.isAdmin(),
                             userDetails.isApproved(),
                             userDetails.getAccounts(),
                             roles));
      }

      @PostMapping("/signup")
      @PreAuthorize("hasRole('ADMIN')")
      public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsById(signUpRequest.getUserId()) && userRepository.findById(signUpRequest.getUserId()).orElse(null).getIsApproved()) {
          return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Username is already taken!"));
        }

        User user = userRepository.findById(signUpRequest.getUserId()).orElse(null);
        if(user==null) {
        	return ResponseEntity.badRequest().body(new MessageResponse("Error: No such user exists"));
        }
        Set<Role> roles = new HashSet<>();

        if (!signUpRequest.isAdmin()) {
          Role userRole = roleRepository.findById(1)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(userRole);
        }
        else {
        	Role userRole = roleRepository.findById(2)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                roles.add(userRole);
        }
        user.setRoles(roles);
        user.setApproved(true);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
      }
    }