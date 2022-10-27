package com.ssafy.nolmung.puppy.repository;

import com.ssafy.nolmung.puppy.domain.Puppy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PuppyRepository extends JpaRepository<Puppy, Integer> {

    int countByPuppyCode(String puppyCode);

    List<Puppy> findAllByUserId(int userId);

    Puppy findByPuppyCode(String puppyCode);
}
