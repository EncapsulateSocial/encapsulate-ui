package com.encapsulate.blog.service;

import java.util.List;

import com.encapsulate.blog.model.Post;
import com.encapsulate.blog.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;
    
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public void addPost(Post post) {
        postRepository.save(post);
    }

    public void updatePost(Post post) {
        // TODO: implement update post
    }

    public void deletePost(Post post) {
        postRepository.delete(post);
    }
}
