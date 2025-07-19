package com.cognizant.loan.repository;

import com.cognizant.loan.model.Loan;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * A simple in-memory repository for Loan objects.
 * In a real application, this would interact with a database.
 */
@Repository
public class LoanRepository {
    // Using a HashMap to simulate a database table where loan number is the key
    private final Map<String, Loan> loans = new HashMap<>();

    public LoanRepository() {
        // Initialize with some dummy loan data
        loans.put("H00987987972342", new Loan("H00987987972342", "car", 400000.00, 3258.00, 18));
        loans.put("H11223344556677", new Loan("H11223344556677", "home", 5000000.00, 45000.00, 180));
        loans.put("H99887766554433", new Loan("H99887766554433", "personal", 100000.00, 9000.00, 12));
    }

    /**
     * Finds a loan by its loan number.
     * @param loanNumber The loan number to search for.
     * @return An Optional containing the Loan if found, otherwise empty.
     */
    public Optional<Loan> findByNumber(String loanNumber) {
        return Optional.ofNullable(loans.get(loanNumber));
    }
}