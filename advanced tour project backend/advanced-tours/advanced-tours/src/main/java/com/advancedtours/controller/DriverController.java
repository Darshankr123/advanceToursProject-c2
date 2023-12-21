package com.advancedtours.controller;

import com.advancedtours.Entity.DriverDetails;
import com.advancedtours.Repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class DriverController {

    @Autowired
    public DriverRepository driverRepo;

    @PostMapping("/AddDriver")
    public  ResponseEntity<?> addDriver(@RequestBody DriverDetails objDriver){
        driverRepo.save(objDriver);
        return new ResponseEntity<>("driver added", HttpStatus.OK);
    }
    @GetMapping("/GetDriver")
    public ResponseEntity<?> getDriver(){
        var driver = driverRepo.findAll();
        return new ResponseEntity<>(driver,HttpStatus.OK);
    }
    @GetMapping("/GetCabsById/{driverId}")
    public ResponseEntity<?> getCabsById(@PathVariable int driverId){
        var cab = driverRepo.findById(driverId).orElseThrow(()->new RuntimeException("cab not found"));
        var data = driverRepo.findById((int) cab.getDriverId());
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
}
