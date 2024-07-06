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

import com.example.REST_API_Website.model.People;
import com.example.REST_API_Website.service.PeopleService;
import java.util.List;
import java.util.Optional;



@RestController
@RequestMapping("/api/people")

public class PeopleController {

    @Autowired
    private PeopleService peopleService;

    @GetMapping
    public List<People> getAllPeople(){
        return peopleService.getAllPeoples();
    }

    @GetMapping("/{id}")
    public ResponseEntity<People> getPeopleById(@PathVariable Long id){
        Optional<People> people = peopleService.getPeopleById(id);

        return people.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

    }

    @PostMapping
    public People createPeople(@RequestBody People people){
        return peopleService.savePeople(people);
    }

    @PutMapping("/{id}")
    public ResponseEntity<People> updatePeople(@PathVariable Long id, @RequestBody People people){
        Optional<People> existingPeople = peopleService.getPeopleById(id);

        if (existingPeople.isPresent()) {
            people.setId(id);
            return ResponseEntity.ok(peopleService.savePeople(people));
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePeople(@PathVariable Long id){
        peopleService.deletePeople(id);
        return ResponseEntity.ok().build();
    }
   

    
    
}
