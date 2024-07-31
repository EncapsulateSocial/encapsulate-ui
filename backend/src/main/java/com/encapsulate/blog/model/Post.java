package com.encapsulate.blog.model;

import java.util.Date;

import javax.persistence.*;

import lombok.Data;
import lombok.NonNull;

@Data                   // Automatically creates getters and setters
@Entity                 // Creates a table in the database
public class Post {
    
    @Id                 // Sets the primary key for the table
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    private String title;

    @ManyToOne(fetch = FetchType.EAGER)
    private Author author;

    @NonNull
    private Date createdAt;

    @NonNull
    private String body;

    private String authorImgUrl;

    private String imgUrl;

    public Post() {}
}
