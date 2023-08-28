package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.TestPropertySource;

import com.example.demo.model.Account;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@DataJpaTest(properties= {"spring.jpa.properties.hibernate.globally_quoted_identifiers=true"})
@AutoConfigureTestDatabase(replace=Replace.NONE)
@TestPropertySource(properties= {"spring.jpa.properties.hibernate.globally_quoted_identifiers=true"})
public class UserTests{
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired 
	UserRepo userRepo;
	
	@Test
	public void should_find_no_user_if_repository_is_empty() {
		Iterable<User> users=userRepo.findAll();
		assertThat(users).isEmpty();
	}
	
	@Test
	public void should_store_a_user() {
		User user=userRepo.save(new User("john","doe","xyz@abc.com","1234567890",new Date(2000-12-24),"Password","12345","west street","1234567890","1234567890","baker",false,false,new ArrayList<Account>(),new HashSet<Role>()));
		assertThat(user).hasFieldOrProperty("userId");
	}
	
	@Test
	public void should_find_all_users() {
		User u1=new User("john","doe","xyz@abc.com","1234567890",new Date(2000-12-24),"Password","12345","west street","1234567890","1234567890","baker",false,false,new ArrayList<Account>(),new HashSet<Role>());
		entityManager.persist(u1);
		User u2=new User("john","doe","xyt@abc.com","1234557890",new Date(2000-12-24),"Password","12345","west street","1234567891","0234567890","baker",false,false,new ArrayList<Account>(),new HashSet<Role>());
		entityManager.persist(u2);
		Iterable<User> users=userRepo.findAll();
		assertThat(users).hasSize(2);
	}
	
	@Test
	public void should_find_user_by_id() {
		User u1=new User("john","doe","xyz@abc.com","1234567890",new Date(2000-12-24),"Password","12345","west street","1234567890","1234567890","baker",false,false,new ArrayList<Account>(),new HashSet<Role>());
		entityManager.persist(u1);
		User u2=new User("john","doe","xyt@abc.com","1234557890",new Date(2000-12-24),"Password","12345","west street","1234567891","0234567890","baker",false,false,new ArrayList<Account>(),new HashSet<Role>());
		entityManager.persist(u2);
		User foundUser=userRepo.findById(u2.getUserId()).get();
		assertThat(foundUser).isEqualTo(u2);
	}
	
	@Test
	public void should_update_user_by_id() {
		User u1=new User("john","doe","xyz@abc.com","1234567890",new Date(2000-12-24),"Password","12345","west street","1234567890","1234567890","baker",false,false,new ArrayList<Account>(),new HashSet<Role>());
		entityManager.persist(u1);
		User u=userRepo.findById(u1.getUserId()).get();
		u.setFirstName("jhonson");
		userRepo.save(u);
		User checkUser=userRepo.findById(u.getUserId()).get();
		assertThat(checkUser.getFirstName()).isEqualTo("jhonson");
	}
	
	@Test
	public void should_delete_user_by_id() {
		User u1=new User("john","doe","xyz@abc.com","1234567890",new Date(2000-12-24),"Password","12345","west street","1234567890","1234567890","baker",false,false,new ArrayList<Account>(),new HashSet<Role>());
		entityManager.persist(u1);
		User u2=new User("john","doe","xyt@abc.com","1234557890",new Date(2000-12-24),"Password","12345","west street","1234567891","0234567890","baker",false,false,new ArrayList<Account>(),new HashSet<Role>());
		entityManager.persist(u2);
		userRepo.deleteById(u1.getUserId());
		Iterable<User> users = userRepo.findAll();
		assertThat(users).hasSize(1);
	}
}
