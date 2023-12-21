package com.advancedtours.controller;

import com.advancedtours.Entity.AdminEntity;
import com.advancedtours.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class AdminController {
    @Autowired
    private AdminRepository adminRepo;

    @PostMapping("/AddAdmin")
    public ResponseEntity<?> createAdmin(@RequestBody AdminEntity objAdmin){
        adminRepo.save(objAdmin);
        return new ResponseEntity<>("admin added successfully", HttpStatus.OK);
    }
}
