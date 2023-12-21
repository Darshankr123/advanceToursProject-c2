package com.advancedtours.Repository;

import com.advancedtours.Entity.HotelData;
import com.advancedtours.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AddHotelRepository extends JpaRepository<HotelData,Integer> {
    Optional<HotelData> findByEmail(String email);
}
