package com.cognizant.account.controller;

import com.cognizant.account.model.Account;
import com.cognizant.account.repository.AccountRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller for Account Microservice.
 * Handles HTTP requests related to account details.
 */
@RestController // Marks this class as a REST controller
@RequestMapping("/accounts") // Base path for all endpoints in this controller
public class AccountController {

    private final AccountRepository accountRepository;

    /**
     * Constructor injection for AccountRepository.
     * Spring automatically injects an instance of AccountRepository.
     */
    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    /**
     * GET endpoint to retrieve account details by account number.
     * Endpoint: /accounts/{number}
     * Example: GET /accounts/00987987973432
     * @param number The account number provided in the path.
     * @return ResponseEntity containing the Account object if found, or 404 Not Found.
     */
    @GetMapping("/{number}") // Maps GET requests to /accounts/{number}
    public ResponseEntity<Account> getAccountDetails(@PathVariable("number") String number) {
        // Use the repository to find the account by number
        return accountRepository.findByNumber(number)
                .map(ResponseEntity::ok) // If account is present, return it with 200 OK status
                .orElse(ResponseEntity.notFound().build()); // If not found, return 404 Not Found status
    }
}
