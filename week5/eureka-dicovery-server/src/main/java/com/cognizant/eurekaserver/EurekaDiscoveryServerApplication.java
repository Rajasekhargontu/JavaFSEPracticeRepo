package com.cognizant.eurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer; // Import for Eureka Server

/**
 * Main application class for the Eureka Discovery Server.
 * @EnableEurekaServer annotation enables Eureka Server functionality.
 */
@SpringBootApplication
@EnableEurekaServer // This annotation turns this Spring Boot application into a Eureka Server
public class EurekaDiscoveryServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaDiscoveryServerApplication.class, args);
	}

}