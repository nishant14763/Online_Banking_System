package com.example.demo.idgenerators;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class UserIdGenerator implements IdentifierGenerator{
	public String genId() {
	String prefix = "CU";
	String genId= prefix + getRandom(6);
	return genId;
	}
	@Override
	public Serializable generate(SharedSessionContractImplementor session,Object object) throws HibernateException{
		Connection conn = session.connection();
		String genId;
		while(true) {
		genId =genId();
		try {
			Statement statement=conn.createStatement();
			String query ="SELECT COUNT(user_id) from user where user_id=" + "'" + genId +"'";
			ResultSet rs=statement.executeQuery(query);
			if(rs.next()) {
				int c=rs.getInt(1);
				if(c==0) break;
			}
		}catch(SQLException e) {
			e.printStackTrace();
			break;
		}
		}
		return genId;
	}
	
	public String getRandom(int length) {
		return String.valueOf(length<1? 0:(int)Math.floor(Math.pow(10, length-1)+Math.random()*9*Math.pow(10,length-1)));	
	}
	
}