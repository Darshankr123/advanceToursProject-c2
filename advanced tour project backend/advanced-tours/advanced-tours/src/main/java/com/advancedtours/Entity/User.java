package com.advancedtours.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String first_name;
    private String last_name;
    private String email;
    private String password;

    @OneToMany(mappedBy = "userDetails")
    @JsonIgnore
    private List<RoomsBooked> roomsBookedList;
}
