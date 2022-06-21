package com.encapsulate.backend.controller;

import java.util.List;

import com.encapsulate.backend.model.Post;
import com.encapsulate.backend.service.PostService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
