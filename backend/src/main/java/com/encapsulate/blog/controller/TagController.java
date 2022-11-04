package com.encapsulate.blog.controller;

import com.encapsulate.blog.model.Tag;
import com.encapsulate.blog.service.TagService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController         // Required to specify that this class is a controller
@RequestMapping("/tags")   // Specifies the endpoint
public class TagController {

    @Autowired
    private TagService tagService;

    @GetMapping
    public List<Tag> getAllTags() {
        return null;
    }
}
