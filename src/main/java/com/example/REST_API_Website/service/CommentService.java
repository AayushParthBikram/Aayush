package com.example.REST_API_Website.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.REST_API_Website.model.Comment;
import com.example.REST_API_Website.repository.CommentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    public List<Comment> getAllComments(){
        return commentRepository.findAll();
    }

    public Optional<Comment> getCommentById(Long id){

        return commentRepository.findById(id);

    }

    public List<Comment> getCommentsByBlogId(Long blogId){

        return commentRepository.findByBlogId(blogId);

    }

    public Comment saveComment(Comment comment){
        return commentRepository.save(comment);
    }

    public void deleteComment(Long id){
        commentRepository.deleteById(id);
    }
}
