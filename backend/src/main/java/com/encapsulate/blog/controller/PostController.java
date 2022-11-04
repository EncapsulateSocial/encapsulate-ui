package com.encapsulate.blog.controller;

import java.util.List;

import com.encapsulate.blog.model.Post;
import com.encapsulate.blog.service.PostService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController         // Required to specify that this class is a controller
@RequestMapping("/posts")   // Specifies the endpoint
public class PostController {

    @Autowired              // dependency injection
    private PostService postService;
    
    @GetMapping
    public List<Post> posts() {
        // Call the service to get posts from the database
        return postService.getAllPosts();
    }

    @PostMapping
    public void addPost() {

    }

    @PutMapping
    public void updatePost() {

    }

    @DeleteMapping
    public void deletePost() {

    }
}
