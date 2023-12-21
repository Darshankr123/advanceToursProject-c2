package com.advancedtours.controller;

import com.advancedtours.Entity.HotelRooms;
import com.advancedtours.Repository.HotelRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class HotelRoomController {
    @Autowired
    public HotelRoomRepository roomRepo;

    @PostMapping("/AddRooms")
    public ResponseEntity<?> addRooms(@RequestBody HotelRooms objRooms){
        roomRepo.save(objRooms);
        return new ResponseEntity<>("rooms added", HttpStatus.OK);
    }
    @GetMapping("/GetRooms")
    public ResponseEntity<?> getRooms(){
        var rooms = roomRepo.findAll();
        return new ResponseEntity<>(rooms,HttpStatus.OK);
    }
    @GetMapping("/GetRoomsById/{roomId}")
        public ResponseEntity<?> getRoomsById(@PathVariable int roomId){
            var room = roomRepo.findById(roomId).orElseThrow(()->new RuntimeException("room not found"));
            var data = roomRepo.findById((int) room.getRoomId());
            return new ResponseEntity<>(data,HttpStatus.OK);
    }
    @PutMapping("/EditRooms/{roomId}")
    public ResponseEntity<?> editRooms(@PathVariable Integer roomId,@RequestBody HotelRooms objRooms){
        var existingRoom = roomRepo.findById(roomId).orElseThrow(()->new RuntimeException("room not found"));
        existingRoom.setAvailableRooms(objRooms.getAvailableRooms());
        roomRepo.save(existingRoom);
        return new ResponseEntity<>("room updated ",HttpStatus.OK);
    }

}
