package com.advancedtours.Repository;

import com.advancedtours.Entity.TourData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourDataRepository extends JpaRepository<TourData,Integer> {
}
