package com.example.backend;

import java.util.List;

public interface AlgorithmDao {
    List<Algorithm> getAlgorithms();

    List<Algorithm> getCrawlers();

    Algorithm getItemById(int id);

    void save(Algorithm algorithm);
}
