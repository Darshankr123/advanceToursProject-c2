package com.advancedtours.Repository;

import com.advancedtours.Entity.HotelRooms;
import org.springframework.data.repository.CrudRepository;

public interface HotelRoomRepository extends CrudRepository<HotelRooms,Integer> {
}
