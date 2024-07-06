package com.example.REST_API_Website.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;





@Entity
@Data
public class Blogging {
    @Id //Here I'm using this Id has the primary key 
    @GeneratedValue(strategy = GenerationType.IDENTITY) //This would give Auto-increment to the Id.
    private long id;

    @Column(nullable = false)
    private String title;  //Since the blog categorizes in different category we first begin with providing the title.

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;  //Then we proceed on giving the content of the blog's.

    @Column(nullable = false)
    private String thumbnail;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", nullable = false)    //This create the relationship Between Blogging post with different People interact with the blog's
    private People author;



    


}
