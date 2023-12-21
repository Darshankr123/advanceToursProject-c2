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
public class HotelData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int hotelId;
    private String hotelName;
    private String hotelAddress;
    private String hotelDistrict;
    private String email;
    private String password;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String hotelLicence;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String imageData;
}
