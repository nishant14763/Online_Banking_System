package com.example.demo.security.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
  @Autowired
  UserRepo userRepository;

  @Override
  @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findById(username)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with account number: " + username));

    return UserDetailsImpl.build(user);
  }

}
