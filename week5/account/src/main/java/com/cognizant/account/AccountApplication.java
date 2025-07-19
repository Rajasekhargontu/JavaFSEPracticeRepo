package com.cognizant.account;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

/**
 * Main application class for the Account Microservice.
 * This class uses @SpringBootApplication to enable autoconfiguration,
 * component scanning, and configuration properties.
 */
@SpringBootApplication // Combines @Configuration, @EnableAutoConfiguration, and @ComponentScan
@EnableDiscoveryClient
public class AccountApplication {

	public static void main(String[] args) {
		// Runs the Spring Boot application
		SpringApplication.run(AccountApplication.class, args);
	}

}