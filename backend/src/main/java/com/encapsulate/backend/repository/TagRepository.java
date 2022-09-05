package com.encapsulate.backend.repository;

import com.encapsulate.backend.model.Tag;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public class TagRepository  extends JpaRepository<Tag, Long> {
    
}
