package com.advancedtours.controller;

import com.advancedtours.Entity.GuideDetails;
import com.advancedtours.Repository.GuideRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class GuideController {

    @Autowired
    public GuideRepository guideRepo;

    @PostMapping("/AddGuide")
    public ResponseEntity<?> addGuides(@RequestBody GuideDetails objGuide){
        guideRepo.save(objGuide);
        return new ResponseEntity<>("guide added", HttpStatus.OK);
    }
    @GetMapping("/GetGuides")
    public ResponseEntity<?> getGuides(){
        var guides = guideRepo.findAll();
        return new ResponseEntity<>(guides,HttpStatus.OK);
    }
}
