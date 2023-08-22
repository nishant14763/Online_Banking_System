package com.example.demo.controller;

//Java Program to Create Rest Controller that
//Defines various API for Sending Mail

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.EmailDetails;
import com.example.demo.repository.EmailService;

//Annotation
@RestController()
@CrossOrigin("*")
//Class
public class EmailController {

	@Autowired private EmailService emailService;

	// Sending a simple Email
	@PostMapping("/sendMail")
	public String
	sendMail(@RequestBody EmailDetails details)
	{
		String status
			= emailService.sendSimpleMail(details);

		return status;
	}

	// Sending email with attachment
	@PostMapping("/sendMailWithAttachment")
	public String sendMailWithAttachment(
		@RequestBody EmailDetails details)
	{
		String status
			= emailService.sendMailWithAttachment(details);

		return status;
	}
}
