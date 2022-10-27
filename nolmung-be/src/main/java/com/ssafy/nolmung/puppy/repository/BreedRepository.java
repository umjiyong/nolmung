package com.ssafy.nolmung.puppy.repository;

import com.ssafy.nolmung.puppy.domain.Breed;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BreedRepository extends JpaRepository<Breed, Integer> {
}
