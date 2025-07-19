// D:/<employee_id>/microservices/loan/src/main/java/com/cognizant/loan/model/Loan.java
package com.cognizant.loan.model;

/**
 * Represents a Loan entity.
 * This is a simple POJO for demonstration purposes.
 */
public class Loan {
    private String number;
    private String type;
    private double loanAmount;
    private double emi;
    private int tenure;

    // Default constructor (required for JSON deserialization)
    public Loan() {
    }

    /**
     * Constructs a new Loan with the specified details.
     * @param number The loan account number.
     * @param type The type of loan (e.g., "car", "home").
     * @param loanAmount The total loan amount.
     * @param emi The Equated Monthly Installment.
     * @param tenure The loan tenure in months.
     */
    public Loan(String number, String type, double loanAmount, double emi, int tenure) {
        this.number = number;
        this.type = type;
        this.loanAmount = loanAmount;
        this.emi = emi;
        this.tenure = tenure;
    }

    // Getters and Setters for all fields

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public double getEmi() {
        return emi;
    }

    public void setEmi(double emi) {
        this.emi = emi;
    }

    public int getTenure() {
        return tenure;
    }

    public void setTenure(int tenure) {
        this.tenure = tenure;
    }

    @Override
    public String toString() {
        return "Loan{" +
                "number='" + number + '\'' +
                ", type='" + type + '\'' +
                ", loanAmount=" + loanAmount +
                ", emi=" + emi +
                ", tenure=" + tenure +
                '}';
    }
}