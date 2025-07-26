package com.cognizant.account.model;

/**
 * Represents an Account entity.
 * This is a simple POJO (Plain Old Java Object) for demonstration purposes.
 */
public class Account {
    private String number;
    private String type;
    private double balance;

    // Default constructor (required for JSON deserialization)
    public Account() {
    }

    /**
     * Constructs a new Account with the specified details.
     * @param number The account number.
     * @param type The type of account (e.g., "savings", "current").
     * @param balance The current balance of the account.
     */
    public Account(String number, String type, double balance) {
        this.number = number;
        this.type = type;
        this.balance = balance;
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

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "Account{" +
                "number='" + number + '\'' +
                ", type='" + type + '\'' +
                ", balance=" + balance +
                '}';
    }
}