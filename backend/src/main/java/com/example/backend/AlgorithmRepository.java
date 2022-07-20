package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AlgorithmRepository extends JpaRepository<Algorithm, Integer> {

    @Query("select a from Algorithm a WHERE a.type = 0")
    List<Algorithm> getAlgorithms();

    @Query("select a from Algorithm a WHERE a.type = 1")
    List<Algorithm> getCrawlers();
}
