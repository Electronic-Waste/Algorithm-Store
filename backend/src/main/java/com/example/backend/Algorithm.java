package com.example.backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "algorithm")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class Algorithm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int type;   // 0: algorithm 1: crawler
    private String title;
    private String filename;
    private String author;
    private String tag;
    private String description;
    private String image;
}
