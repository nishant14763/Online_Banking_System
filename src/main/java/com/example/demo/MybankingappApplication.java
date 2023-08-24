package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@SpringBootApplication
public class MybankingappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MybankingappApplication.class, args);
	}
	
	@Bean
	public OpenAPI openAPI() {
	    return new OpenAPI().info(new Info().title("SpringDoc example")
	        .description("SpringDoc application")
	        .version("v0.0.1"));
	}
}
