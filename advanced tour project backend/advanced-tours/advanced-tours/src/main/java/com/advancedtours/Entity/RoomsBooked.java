package com.advancedtours.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RoomsBooked {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String checkInDate;
    private String checkOutDate;
    private String numberOfDays;
    private String price;
//    private String roomId;
    private String paymentMode;

    @ManyToOne
    private HotelRooms hotelRooms;

    @ManyToOne
    private User userDetails;
}
