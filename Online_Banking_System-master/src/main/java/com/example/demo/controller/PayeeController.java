package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.PayeeService;
import com.example.demo.model.Payee;

@RestController
@RequestMapping("/payees")
public class PayeeController {
    @Autowired
    private PayeeService payeeService;

    @PostMapping("/{senderAccountNumber}")
    public ResponseEntity<String> addPayee(
            @PathVariable String senderAccountNumber,
            @RequestBody Payee newPayee
    ) {
        // Set the sender account number for the new payee
        newPayee.setPayeeAccountNumber(senderAccountNumber);

        // Save the beneficiary (payee)
        payeeService.addPayee(newPayee);

        return ResponseEntity.status(HttpStatus.CREATED).body("Beneficiary added successfully");
    }

    // Other payee-related endpoints...
}