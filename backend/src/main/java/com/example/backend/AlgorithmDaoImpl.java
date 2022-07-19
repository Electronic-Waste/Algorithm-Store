package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AlgorithmDaoImpl implements AlgorithmDao{
    @Autowired
    private AlgorithmRepository algorithmRepository;

    @Override
    public List<Algorithm> getAlgorithms() {
        return algorithmRepository.getAlgorithms();
    }

    @Override
    public void save(Algorithm algorithm) {
        algorithmRepository.save(algorithm);
    }
}
