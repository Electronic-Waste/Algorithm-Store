package com.example.backend;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "algorithm")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class Algorithm {
    @Id
    private int id;

    private String title;
    private String filename;
    private String author;
    private String tag;
    private String description;
    private String image;
}
