package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties= {"spring.jpa.properties.hibernate.globally_quoted_identifiers=true"})
class MybankingappApplicationTests {

	@Test
	void contextLoads() {
	}

}
