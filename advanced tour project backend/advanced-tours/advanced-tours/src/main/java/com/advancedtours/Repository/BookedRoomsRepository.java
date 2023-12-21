package com.advancedtours.Repository;

import com.advancedtours.Entity.RoomsBooked;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookedRoomsRepository extends JpaRepository<RoomsBooked,Integer> {
}
