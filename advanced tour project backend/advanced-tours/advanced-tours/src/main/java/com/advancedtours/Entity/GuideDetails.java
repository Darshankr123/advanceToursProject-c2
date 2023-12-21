package com.advancedtours.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GuideDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int guideId;
    private String guideName;
    private String guideDistrict;
    private long mobile;
}
