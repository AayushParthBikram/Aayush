package com.example.REST_API_Website.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.REST_API_Website.model.People;
import com.example.REST_API_Website.repository.PeopleRepository;

@Service
public class PeopleService {
    @Autowired
    private PeopleRepository peopleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<People> getAllPeoples(){
        return peopleRepository.findAll(); //find all the people listed in the blog I have provided here the logic from peopleRepository to find all the people attached in this blogging site.
    }

    public Optional<People> getPeopleById(Long id){
        return peopleRepository.findById(id);
    }

    public People savePeople(People people){
        people.setPassword(passwordEncoder.encode(people.getPassword()));
        return peopleRepository.save(people); //All of the people who have authenticated here properly I have encoded here with the provided password to save the list of people for the Blogging website.
    }

    public void deletePeople(Long id){
        peopleRepository.deleteById(id); //This would delete the people from the site with the provided Id.
    }
}
