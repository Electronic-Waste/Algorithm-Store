package com.example.backend;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Slf4j
@RestController
public class AlgorithmController {

    @Value("${path.algorithm}")
    private String algorithmPath;

    @Value("${path.crawler}")
    private String crawlerPath;

    private final AlgorithmDao algorithmDao;

    public AlgorithmController(AlgorithmDao algorithmDao) {
        this.algorithmDao = algorithmDao;
    }

    @GetMapping("/algorithms")
    ResponseEntity<List<Algorithm>> getAlgorithms() {
        return ResponseEntity.ok(algorithmDao.getAlgorithms());
    }

    @GetMapping("/crawlers")
    ResponseEntity<List<Algorithm>> getCrawlers() {
        return ResponseEntity.ok(algorithmDao.getCrawlers());
    }

    @PostMapping("/upload")
    public ResponseEntity<?> upload(
            @RequestParam("file") MultipartFile file, @RequestParam("title") String title,
            @RequestParam("type") Integer type,@RequestParam("author") String author, @RequestParam("tag") String tag,
            @RequestParam("description") String description, @RequestParam("image") String image) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("文件为空");
        }

        String fileName = file.getOriginalFilename();
        String path = type == 0 ? algorithmPath : crawlerPath;
        String folder = type == 0 ? "/algorithms/" : "/crawlers/";
        File dest = new File(path + fileName);
        try {
            // Upload file
            file.transferTo(dest);
            log.info(fileName + "上传成功");

            // Write to database
            Algorithm algorithm = new Algorithm();
            algorithm.setTitle(title);
            algorithm.setType(type);
            algorithm.setFilename(fileName);
            algorithm.setAuthor(author);
            algorithm.setTag(tag);
            algorithm.setDescription(description);
            algorithm.setImage(image);
            algorithmDao.save(algorithm);

            return ResponseEntity.created(new URI(folder + fileName)).build();
        } catch (IOException | URISyntaxException e) {
            log.error(e.toString());
            return ResponseEntity.internalServerError().body("上传失败");
        }
    }

    @GetMapping("/download/{type}/{fileName}")
    public ResponseEntity<?> download(@PathVariable String fileName, @PathVariable String type) {
        try {
            int typeInt = Integer.parseInt(type);
            String path = typeInt == 0 ? algorithmPath : crawlerPath;
            FileInputStream fis = new FileInputStream(path + fileName);
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.set(HttpHeaders.CONTENT_DISPOSITION, ContentDisposition.attachment().filename(fileName).build().toString());
            return ResponseEntity.ok().headers(httpHeaders).body(IOUtils.toByteArray(fis));
        } catch (FileNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (IOException e) {
            log.error(e.toString());
            return ResponseEntity.internalServerError().build();
        }
    }
    
    @GetMapping("/getitem/{id}")
    public ResponseEntity<Algorithm> getItem(@PathVariable String id) {
        int idInt = Integer.parseInt(id);
        Algorithm result = algorithmDao.getItemById(idInt);
        return ResponseEntity.ok(result);
    }


}
