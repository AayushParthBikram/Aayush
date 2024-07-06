package com.example.REST_API_Website.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.REST_API_Website.model.Blogging;
import com.example.REST_API_Website.service.BloggingService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blogs")
public class BloggingController {
    @Autowired
    private BloggingService bloggingService;
    
    @GetMapping
    public List<Blogging> getAllBloggings(){
        return bloggingService.getAllBloggings();
    }
    
    @PostMapping("/{id}")
    public Blogging createBlogging(@RequestBody Blogging blogging){
        return bloggingService.saveBlogging(blogging);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Blogging> updateBlogging(@PathVariable Long id, @RequestBody Blogging blogging){
        Optional<Blogging> existingBlogging = bloggingService.getBloggingById(id);
        if(existingBlogging.isPresent()){
            blogging.setId(id);
            return ResponseEntity.ok(bloggingService.saveBlogging(blogging));
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlogging(@PathVariable Long id){
        bloggingService.deleteBlogging(id);
        return ResponseEntity.ok().build();
    }

}
