package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.CountryRepository;
import com.cognizant.orm_learn.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CountryService {
    @Autowired
    private CountryRepository countryRepository;
    @Transactional
    public List<Country> getAllCountries(){
        return countryRepository.findAll();
    }
}
