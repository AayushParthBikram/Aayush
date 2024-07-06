package com.example.REST_API_Website.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.REST_API_Website.model.People;
import java.util.List;
import java.util.Optional;


@Repository
public interface PeopleRepository extends JpaRepository<People, Long> {

    Optional<People> findByPeopleName(String peopleName);
    
}
