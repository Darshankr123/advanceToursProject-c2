package com.advancedtours.controller;

import com.advancedtours.Entity.HotelData;
import com.advancedtours.Repository.AddHotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class AddHotelController {

    @Autowired
    public AddHotelRepository addHotelRepo;

    @PostMapping("/AddHotel")
    public ResponseEntity<?> addHotel(@RequestBody HotelData objHotel){
        addHotelRepo.save(objHotel);
        return new ResponseEntity<>("Hotel added", HttpStatus.OK);
    }
    @GetMapping("/GetHotel")
    public ResponseEntity<?> getHotel(){
        var hotel = addHotelRepo.findAll();
        return new ResponseEntity<>(hotel,HttpStatus.OK);
    }

    @GetMapping("/GetHotelById/{hotelId}")
    public ResponseEntity<?> getHotelById(@PathVariable int hotelId){
        var hotel = addHotelRepo.findById(hotelId).orElseThrow(()->new RuntimeException("not found"));
        var data = addHotelRepo.findById((int) hotel.getHotelId());
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @GetMapping("/bookRoom/{hotelId}")
    public ResponseEntity<?> bookRoom(@PathVariable int hotelId){
        var hotel = addHotelRepo.findById(hotelId).orElseThrow(()->new RuntimeException("not found"));
        var data = addHotelRepo.findById((int) hotel.getHotelId());
        return new ResponseEntity<>(data,HttpStatus.OK);
    }
}
