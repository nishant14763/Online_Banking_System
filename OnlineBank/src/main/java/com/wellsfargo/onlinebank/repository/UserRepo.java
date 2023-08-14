package com.wellsfargo.onlinebank.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.wellsfargo.onlinebank.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{
	@Query
	public Optional<User> findByEmail(String email);

	//@Query
	//public List<User> findByFirstNameOrLastName(String firstName, String lastName);

}
