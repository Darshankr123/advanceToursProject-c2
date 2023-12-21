package com.advancedtours.Repository;

import com.advancedtours.Entity.DriverDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepository extends JpaRepository<DriverDetails,Integer> {
}
