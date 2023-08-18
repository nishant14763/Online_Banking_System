package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Account;
import com.example.demo.model.User;
import com.example.demo.repository.AccountRepo;
import com.example.demo.repository.TransactionRepo;
import com.example.demo.repository.UserRepo;

@Service
public class TransactionService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private TransactionRepo transactionRepository;

    public boolean transferFunds(TransferRequest transferRequest) {
        User sender = userRepo.findById(transferRequest.getSenderAccountNumber()).orElse(null);
        Account senderAccount =AccountRepo.findById(transferRequest.getSenderAccountNumber());
        Account reciverAccount =AccountRepo.findById(transferRequest.getReceiverAccountNumber());
        String receiver = transferRequest.getReceiverAccountNumber();

        if (sender == null || receiver == null || (transferRequest.getTransactionPassword()== sender.getTransactionPassword())) {
            return false; // Invalid sender account or incorrect transaction password
        }
        
        if (senderAccount.getBalance() < transferRequest.getAmount()) {
            return false; // Insufficient funds
        }
        
        // Perform fund transfer logic
        senderAccount.setBalance(senderAccount.getBalance() - transferRequest.getAmount());
        reciverAccount.setBalance(reciverAccount.getBalance() + transferRequest.getAmount());
        
        // Create transaction records for sender and receiver
        // Update transaction timestamps and details

       

        return true; // Successful fund transfer
    }

    // Other transaction-related methods...
}