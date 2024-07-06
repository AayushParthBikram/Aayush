package com.example.REST_API_Website.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.REST_API_Website.model.Comment;

import java.util.*;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByBlogId(Long blogId);
    //Gives the custom Logic to find the list of comments by different blog Id which is actually the People id.
}
