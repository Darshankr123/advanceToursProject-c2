package com.advancedtours.Repository;

import com.advancedtours.Entity.GuideDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuideRepository extends JpaRepository<GuideDetails,Integer> {
}
