package com.encapsulate.backend.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data                   // Automatically creates getters and setters
@Entity                 // Creates a table in the database
public class Post {
    
    @Id                 // Sets the primary key for the table
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String author;
    private Date createdAt;
    private String body;
    private String authorImgUrl;
    private String imgUrl;
}
