package com.example.demo.idgenerators;

import java.io.Serializable;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class UserIdGenerator implements IdentifierGenerator{
	String prefix = "CU";
	String genId= prefix + getRandom(6);
	
	@Override
	public Serializable generate(SharedSessionContractImplementor session,Object object) throws HibernateException{
		return genId;
	}
	
	public String getRandom(int length) {
		return String.valueOf(length<1? 0:(int)Math.floor(Math.pow(10, length-1)+Math.random()*9*Math.pow(10,length-1)));	
	}
	
}