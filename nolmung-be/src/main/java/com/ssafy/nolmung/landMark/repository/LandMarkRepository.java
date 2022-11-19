package com.ssafy.nolmung.landMark.repository;

import com.ssafy.nolmung.landMark.domain.LandMark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LandMarkRepository extends JpaRepository<LandMark, Integer> {
    @Query(value = "SELECT\n" +
            "\t(6371 * acos(cos(CAST(landmark_lat AS FLOAT) * 3.141592653589793 / 180.0) * cos(cur_lat = :curLat * 3.141592653589793 / 180.0) \n" +
            "\t\t               * cos((cur_lon = :curLon * 3.141592653589793 / 180.0) - (CAST(landmark_lon AS FLOAT) * 3.141592653589793 / 180.0)) + sin(CAST(landmark_lat AS FLOAT) * 3.141592653589793 / 180.0) \n" +
            "\t\t               * sin(cur_lat = :curLat * 3.141592653589793 / 180.0))) as distance\n" +
            "FROM LandMark\n" +
            "order by distance\n" +
            "LIMIT 20;", nativeQuery = true)
    public List<LandMark> findLandmarkMarkerByProximity(@Param("curLat") double curLat, @Param("curLon") double curLon);
}
