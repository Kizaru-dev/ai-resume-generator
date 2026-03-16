package com.resume.backend.controller;

import com.resume.backend.service.ResumeService;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/resume")
public class ResumeController {
    private ResumeService resumeService;

    public ResumeController(ResumeService resumeService){
        this.resumeService = resumeService ;
    }

    @PostMapping("/generate")
    public ResponseEntity<Map<String , Object> > getResumeData(@RequestBody Map<String, Object> request) throws IOException {
        String userDescription = (String) request.get("userDescription");
        Map<String , Object>  stringObjectMap=  resumeService.generateResumeResponse(userDescription);
      return new ResponseEntity<>(stringObjectMap, HttpStatus.OK);

    }
}
