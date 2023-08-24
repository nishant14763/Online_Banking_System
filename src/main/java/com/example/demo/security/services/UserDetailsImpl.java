package com.example.demo.security.services;

import java.sql.Date;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.model.Account;
import com.example.demo.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDetailsImpl implements UserDetails {
	  private static final long serialVersionUID = 1L;

	  private String userId;
	  private String firstName;
	  private String lastName;
	  private String email;
	  private String mobile;
	  private Date dob;
	  @JsonIgnore
	  private String loginPassword;
	  private String transactionPassword;
	  private String address;
	  private String aadhaarNumber;
	  private String panNumber;
	  private String occupation;
	  private boolean isAdmin;
	  private boolean isApproved;
	  private List<Account> accounts;


	  private Collection<? extends GrantedAuthority> authorities;

	  public UserDetailsImpl(String userId,String firstName,String lastName,String email,String mobile,Date dob,String loginPassword,String transactionPassword,String address,String aadhaarNumber,String panNumber,String occupation,boolean isAdmin,boolean isApproved,List<Account> accounts,
	      Collection<? extends GrantedAuthority> authorities) {
	    this.userId =userId;
	    this.firstName=firstName;
	    this.lastName=lastName;
	    this.email =email;
	    this.mobile =mobile;
	    this.dob =dob;
	    this.loginPassword=loginPassword;
	    this.transactionPassword=transactionPassword;
	    this.address = address;
	    this.aadhaarNumber=aadhaarNumber;
	    this.panNumber=panNumber;
	    this.occupation=occupation;
	    this.isAdmin=isAdmin;
	    this.isApproved=isApproved;
	    this.accounts =accounts;
	    this.authorities = authorities;
	  }

	  public static UserDetailsImpl build(User user) {
	    List<GrantedAuthority> authorities = user.getRoles().stream()
	        .map(role -> new SimpleGrantedAuthority(role.getName().name()))
	        .collect(Collectors.toList());
	    return new UserDetailsImpl(
	            user.getUserId(),
	            user.getFirstName(),
	            user.getLastName(),
	            user.getEmail(),
	            user.getMobile(),
	            user.getDob(),
	            user.getLoginPassword(),
	            user.getTransactionPassword(),
	            user.getAddress(),
	            user.getAadhaarNumber(),
	            user.getPanNumber(),
	            user.getOccupation(),
	            user.getIsAdmin(),
	            user.getIsApproved(),
	            user.getAccounts(),
	            authorities);
	      }

	      @Override
	      public Collection<? extends GrantedAuthority> getAuthorities() {
	        return authorities;
	      }
	      

	      public String getFirstName() {
			return firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public String getEmail() {
			return email;
		}

		public String getMobile() {
			return mobile;
		}

		public Date getDob() {
			return dob;
		}

		public String getTransactionPassword() {
			return transactionPassword;
		}

		public String getAddress() {
			return address;
		}

		public String getAadhaarNumber() {
			return aadhaarNumber;
		}

		public String getPanNumber() {
			return panNumber;
		}

		public String getOccupation() {
			return occupation;
		}

		public boolean isAdmin() {
			return isAdmin;
		}

		public boolean isApproved() {
			return isApproved;
		}

		public List<Account> getAccounts(){
			return accounts;
		}
		@Override
	      public String getUsername() {
	    	  return userId;
	      }
	      
	      @Override
	      public String getPassword() {
	    	  return loginPassword;
	      }
	      
	      
	      
	      @Override
	      public boolean isAccountNonExpired() {
	        return true;
	      }

	      @Override
	      public boolean isAccountNonLocked() {
	        return true;
	      }

	      @Override
	      public boolean isCredentialsNonExpired() {
	        return true;
	      }

	      @Override
	      public boolean isEnabled() {
	        return true;
	      }

	      @Override
	      public boolean equals(Object o) {
	        if (this == o)
	          return true;
	        if (o == null || getClass() != o.getClass())
	          return false;
	        UserDetailsImpl user = (UserDetailsImpl) o;
	        return Objects.equals(userId, user.userId);
	      }
	    }