package com.advancedtours.controller;

import com.advancedtours.Entity.RoomsBooked;
import com.advancedtours.Repository.BookedRoomsRepository;
import com.advancedtours.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class RoomsBookedController {

    @Autowired
    public BookedRoomsRepository roomsRepo;

    @Autowired
    public UserRepository userRepo;

    @PostMapping("/BookingRooms/{email}")
    public ResponseEntity<?> bookingRooms(@PathVariable String email, @RequestBody RoomsBooked roomsObj){
        var users = userRepo.findByEmail(email).orElseThrow(()->new RuntimeException("Id not found"));
        roomsObj.setUserDetails(users);
        roomsRepo.save(roomsObj);
        return new ResponseEntity<>("rooms booked", HttpStatus.OK);
    }
}
