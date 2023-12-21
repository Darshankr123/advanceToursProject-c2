package com.advancedtours.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class HotelRooms {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int roomId;
    private String hotelName;
    private String category;
    private int price;
    private int ratings;
    private int availableRooms;
    private int totalRooms;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String imageData;

    @OneToMany (mappedBy = "hotelRooms")
    private List<RoomsBooked> roomsBookedList;


}
