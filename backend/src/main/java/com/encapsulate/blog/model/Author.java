package com.encapsulate.blog.model;

import lombok.Data;
import lombok.NonNull;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NonNull
    private String firstName;

    @NonNull
    private String lastName;

    @OneToMany
    private List<Post> posts;

    public Author() {

    }
}
