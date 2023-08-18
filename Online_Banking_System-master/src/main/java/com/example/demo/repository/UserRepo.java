package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.User;

public interface UserRepo extends JpaRepository<User,String>{
	@Query
	public User findByEmail(String email);
	
	@Query
	public User findByIbId(String ibId);

	
	@Query
	public Optional<User> findByFirstNameOrLastName(String firstName, String LastName);
	
	@Query
	public Optional<User> findByPhoneNumber(String mobile);
	
	@Query
	public Optional<User> findByAadharNumber(String aadhaarNumber);
	
	Optional<User> findByAadhar(String aadhar);
    Optional<User> findByPan(String pan);
    
    @Query
    public Optional<User> findById(String userId);

	public void saveUser(User newUser);
}
