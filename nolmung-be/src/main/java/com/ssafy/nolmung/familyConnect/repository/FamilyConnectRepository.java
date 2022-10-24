package com.ssafy.nolmung.familyConnect.repository;

import com.ssafy.nolmung.boardComment.domain.BoardComment;
import com.ssafy.nolmung.familyConnect.domain.FamilyConnect;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FamilyConnectRepository extends JpaRepository<FamilyConnect, Integer> {
}
