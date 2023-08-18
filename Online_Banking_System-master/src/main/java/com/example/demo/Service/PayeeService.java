package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.Payee;
import com.example.demo.repository.PayeeRepo;

public class PayeeService {
	@Autowired
    private PayeeRepo payeeRepository;

    public void addPayee(Payee payee) {
        payeeRepository.save(payee);
    }
}
