package com.example.REST_API_Website.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.REST_API_Website.model.Blogging;

import com.example.REST_API_Website.repository.BloggingRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BloggingService {
    @Autowired
    private BloggingRepository bloggingRepository;

    public List<Blogging> getAllBloggings(){
        return bloggingRepository.findAll();
    }

    public Optional<Blogging> getBloggingById(Long id){
        return bloggingRepository.findById(id);

    }

   public List<Blogging> getBloggingByAuthorId(Long authorId){
     return bloggingRepository.findByAuthorId(authorId);

   }

   public Blogging saveBlogging(Blogging blogging){
    return bloggingRepository.save(blogging);
   }

   public void deleteBlogging(Long id){

    bloggingRepository.deleteById(id);

   }
    
}
