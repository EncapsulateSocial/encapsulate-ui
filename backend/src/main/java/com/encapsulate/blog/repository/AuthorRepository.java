package com.encapsulate.blog.repository;

import com.encapsulate.blog.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}
