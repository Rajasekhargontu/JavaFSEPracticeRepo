package com.cognizant.account.repository;

import com.cognizant.account.model.Account;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * A simple in-memory repository for Account objects.
 * In a real application, this would interact with a database.
 */
@Repository
public class AccountRepository {
    // Using a HashMap to simulate a database table where account number is the key
    private final Map<String, Account> accounts = new HashMap<>();

    public AccountRepository() {
        // Initialize with some dummy account data
        accounts.put("00987987973432", new Account("00987987973432", "savings", 234343.00));
        accounts.put("12345678901234", new Account("12345678901234", "current", 50000.50));
        accounts.put("98765432109876", new Account("98765432109876", "savings", 15000.75));
    }

    /**
     * Finds an account by its account number.
     * @param accountNumber The account number to search for.
     * @return An Optional containing the Account if found, otherwise empty.
     */
    public Optional<Account> findByNumber(String accountNumber) {
        return Optional.ofNullable(accounts.get(accountNumber));
    }
}