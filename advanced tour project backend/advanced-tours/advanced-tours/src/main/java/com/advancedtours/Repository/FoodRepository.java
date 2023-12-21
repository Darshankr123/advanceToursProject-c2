package com.advancedtours.Repository;

import com.advancedtours.Entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food,Integer> {
}
