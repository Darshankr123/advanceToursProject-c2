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
public class DriverDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int driverId;
    private String driverName;
    private String car;
    private String model;
    private String district;
    private long contactNumber;
    private String cost;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String image;

}
