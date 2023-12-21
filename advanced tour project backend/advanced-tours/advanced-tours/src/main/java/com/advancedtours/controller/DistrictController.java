package com.advancedtours.controller;

import com.advancedtours.Entity.District;
import com.advancedtours.Repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class DistrictController {
    @Autowired
    public DistrictRepository distRepo;
    private District objDist;

    @PostMapping("/AddDistrict")
    public ResponseEntity<?> createDistrict(@RequestBody District objDist){
        distRepo.save(objDist);
        return new ResponseEntity<>("district added", HttpStatus.OK);
    }
    @GetMapping("/GetDistrict")
    public  ResponseEntity<?> getDistrict(){
        var district = distRepo.findAll();
        return  new ResponseEntity<>(district ,HttpStatus.OK);
    }
}
