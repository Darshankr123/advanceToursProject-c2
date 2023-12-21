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

public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int foodId;
    private String foodName;
    private String foodType;
    private String hotelName;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String imageData;
}
