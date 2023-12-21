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
public class TourData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tourId;
    private String place;
    private String city;
    private String state;
    private long zip;
    private String category;
    private String typeOfPlace;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String image;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String about;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String history;
    private int priceOfTour;
}
