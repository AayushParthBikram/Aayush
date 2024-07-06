package com.example.REST_API_Website.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.REST_API_Website.model.Blogging;

import java.util.*;

@Repository
public interface BloggingRepository extends JpaRepository<Blogging, Long> {

    List<Blogging> findByAuthorId(Long authorId);
    
    
}
