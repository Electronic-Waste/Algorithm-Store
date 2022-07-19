package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AlgorithmRepository extends JpaRepository<Algorithm, Integer> {

    @Query("select a from Algorithm a")
    List<Algorithm> getAlgorithms();
}
