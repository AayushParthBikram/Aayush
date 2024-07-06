package com.example.REST_API_Website.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.REST_API_Website.model.People;
import com.example.REST_API_Website.repository.PeopleRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    
    @Autowired
    private PeopleRepository peopleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        People people = peopleRepository.findByPeopleName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new org.springframework.security.core.userdetails.User(people.getPeople_name(), people.getPassword(), new ArrayList<>());
    }
}
