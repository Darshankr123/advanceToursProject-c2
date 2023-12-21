package com.advancedtours.controller;

import com.advancedtours.Entity.AdminEntity;
import com.advancedtours.Entity.HotelData;
import com.advancedtours.Entity.User;
import com.advancedtours.Repository.AddHotelRepository;
import com.advancedtours.Repository.AdminRepository;
import com.advancedtours.Repository.UserRepository;
import com.advancedtours.UserDTO.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class LoginController {

    @Autowired
    public AdminRepository adminRepo;

    @Autowired
    public UserRepository userRepo;

    @Autowired
    public AddHotelRepository addHotelRepository;

    @PostMapping("/UserLogin")
    public ResponseEntity<?> userLogin(@RequestBody UserDto obj){
        if(obj.getUsertype().equals("admin")){
            AdminEntity admin = adminRepo.findById(obj.email).orElseThrow(()->new RuntimeException("Admin not found"));
            if(admin.getPassword().equals(obj.getPassword())){
                return new ResponseEntity<>("Admin", HttpStatus.OK);
            }
            else{
                throw new RuntimeException("Invalid password");
            }

        } else if (obj.getUsertype().equals("user")) {
            User user = userRepo.findByEmail(obj.email).orElseThrow(()->new RuntimeException("user not found"));
            if(user.getPassword().equals(obj.getPassword())){
                return new ResponseEntity<>("user",HttpStatus.OK);
            }else{
                throw new RuntimeException("invalid password");
            }

        } else if (obj.getUsertype().equals("hotel")) {
            HotelData hotel = addHotelRepository.findByEmail(obj.email).orElseThrow(()->new RuntimeException("Hotel not found"));
            if(hotel.getPassword().equals(obj.getPassword())){
                return new ResponseEntity<>("hotelAdmin",HttpStatus.OK);
            }
            else{
                throw new RuntimeException("invalid password");
            }

        } else {
            throw new RuntimeException("select usertype");
        }
    }
}
