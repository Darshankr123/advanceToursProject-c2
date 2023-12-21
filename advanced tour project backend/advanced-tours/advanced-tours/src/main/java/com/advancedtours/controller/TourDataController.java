package com.advancedtours.controller;

import com.advancedtours.Entity.TourData;
import com.advancedtours.Repository.TourDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class TourDataController {
    @Autowired
    private TourDataRepository tourDataRepo;

    @PostMapping("/AddTour")
    public ResponseEntity<?> createNewTour(@RequestBody TourData objTour){
        tourDataRepo.save(objTour);
        return new ResponseEntity<>("tour Added", HttpStatus.OK);
    }
    @GetMapping("/GetTours")
    public ResponseEntity<?> getTours(){
        var tours = tourDataRepo.findAll();
        return  new ResponseEntity<>(tours,HttpStatus.OK);
    }
    @GetMapping("/GetToursById/{tourId}")
    public ResponseEntity<?> getTourById(@PathVariable int tourId){
        var tour = tourDataRepo.findById(tourId).orElseThrow(()->new RuntimeException("Tour not found"));
        var data = tourDataRepo.findById((int) tour.getTourId());
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
}
