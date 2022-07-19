package com.example.backend;

import java.util.List;

public interface AlgorithmDao {
    List<Algorithm> getAlgorithms();

    void save(Algorithm algorithm);
}
