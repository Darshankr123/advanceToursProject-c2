package com.advancedtours.UserDTO;

import jakarta.persistence.*;

@Entity
@Table(name = "users_data")
public class UsersDataDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int usersId;
    private String userName;
    private String userEmail;
    private String hotelName;
    private String roomNumber;
}
