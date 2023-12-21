package com.advancedtours.controller;

import com.advancedtours.Entity.User;
import com.advancedtours.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserRepository userRepo;

    @PostMapping("/AddUser")
    public ResponseEntity<?> createNewUser(@RequestBody User objUser){
        userRepo.save(objUser);
        return  new ResponseEntity<>("user added successfully", HttpStatus.OK);
    }
    @GetMapping("/GetUser")
    public ResponseEntity<?> getUser(){
        var user = userRepo.findAll();
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
}
