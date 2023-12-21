package com.advancedtours.controller;

import com.advancedtours.Entity.Food;
import com.advancedtours.Repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class FoodController {

    @Autowired
    public FoodRepository foodRepo;

    @PostMapping("/AddFood")
    public ResponseEntity<?> addFood(@RequestBody Food objFood){
        foodRepo.save(objFood);
        return new ResponseEntity<>("food added", HttpStatus.OK);
    }
    @GetMapping("/GetFood")
    public ResponseEntity<?> getFood(){
        var food = foodRepo.findAll();
        return new ResponseEntity<>(food,HttpStatus.OK);
    }
}
