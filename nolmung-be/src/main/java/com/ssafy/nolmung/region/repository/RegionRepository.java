package com.ssafy.nolmung.region.repository;

import com.ssafy.nolmung.region.domain.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionRepository extends JpaRepository<Region, Integer> {
    Region findByEupMyeonDong(String eupMyeonDong);
}
