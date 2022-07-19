package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.List;
import java.util.Map;

@RestController
public class AlgorithmController {
    @Autowired
    AlgorithmDao algorithmDao;

    @GetMapping("/upload")
    public String upload() {
        return "upload";
    }

    @RequestMapping("/getAlgorithms")
    List<Algorithm> getAlgorithms() {
        return algorithmDao.getAlgorithms();
    }

    @PostMapping("/upload")
    public String upload(@RequestParam("file") MultipartFile file, @RequestParam("title") String title,
                         @RequestParam("author") String author, @RequestParam("tag") String tag,
                         @RequestParam("description") String description, @RequestParam("image") String image) {
        if (file.isEmpty()) {
            return "上传失败，请选择文件";
        }

        String fileName = file.getOriginalFilename();
        String filePath = "D:/PRP/Algorithm-Store/files/";
        File dest = new File(filePath + fileName);
        try {
            // Upload file
            file.transferTo(dest);
            System.out.println("上传成功");

            // Write to database
            Algorithm algorithm = new Algorithm();
            algorithm.setTitle(title);
            algorithm.setFilename(fileName);
            algorithm.setAuthor(author);
            algorithm.setTag(tag);
            algorithm.setDescription(description);
            algorithm.setImage(image);
            algorithmDao.save(algorithm);
            System.out.println(algorithm);
            System.out.println("信息更新成功");

            return "上传成功";
        } catch (IOException e) {
            System.out.println("上传失败");
        }
        return "上传失败";
    }

    @RequestMapping("/download/{path}")
    public void download(@PathVariable("path") String path, HttpServletResponse response) {
        // Get file
        String fileDir = "D:/PRP/Algorithm-Store/files/";
        String filePath = fileDir + path;
        File file = new File(filePath);

        byte[] buffer = new byte[1024];
        BufferedInputStream bis = null;
        OutputStream os = null;
        try {
            if (file.exists()) {
                response.setContentType("application/octet-stream");
                response.setCharacterEncoding("UTF-8");
                os = response.getOutputStream();
                bis = new BufferedInputStream(new FileInputStream(file));
                while (bis.read(buffer) != -1) {
                    os.write(buffer);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (bis != null) {
                    bis.close();
                }
                if (os != null) {
                    os.flush();
                    os.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
