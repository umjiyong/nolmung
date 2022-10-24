package com.ssafy.nolmung.puppy.repository;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.puppy.domain.Puppy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PuppyRepository extends JpaRepository<Puppy, Integer> {
}
