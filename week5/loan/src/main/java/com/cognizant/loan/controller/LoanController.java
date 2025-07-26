package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import com.cognizant.loan.repository.LoanRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller for Loan Microservice.
 * Handles HTTP requests related to loan details.
 */
@RestController // Marks this class as a REST controller
@RequestMapping("/loans") // Base path for all endpoints in this controller
public class LoanController {

    private final LoanRepository loanRepository;

    /**
     * Constructor injection for LoanRepository.
     * Spring automatically injects an instance of LoanRepository.
     */
    public LoanController(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }

    /**
     * GET endpoint to retrieve loan details by loan number.
     * Endpoint: /loans/{number}
     * Example: GET /loans/H00987987972342
     * @param number The loan number provided in the path.
     * @return ResponseEntity containing the Loan object if found, or 404 Not Found.
     */
    @GetMapping("/{number}") // Maps GET requests to /loans/{number}
    public ResponseEntity<Loan> getLoanDetails(@PathVariable("number") String number) {
        // Use the repository to find the loan by number
        return loanRepository.findByNumber(number)
                .map(ResponseEntity::ok) // If loan is present, return it with 200 OK status
                .orElse(ResponseEntity.notFound().build()); // If not found, return 404 Not Found status
    }
}