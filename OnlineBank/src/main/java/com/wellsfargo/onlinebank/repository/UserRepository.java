package com.wellsfargo.onlinebank.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wellsfargo.onlinebank.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
