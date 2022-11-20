package com.ssafy.nolmung.region.domain;

//import org.locationtech.jts.geom.Point;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.board.domain.Board;
import com.ssafy.nolmung.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.geo.Point;

import javax.persistence.*;
import java.awt.*;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="region_id")
    private int regionId;

    @Column(name="sido")
    private String sido;

    @Column(name="sigungu")
    private String sigungu;

    @Column(name="eup_myeon_dong")
    private String eupMyeonDong;

    @Column(name="near_region_id")
    private String nearRegionId;

    @Column(name="region_lat")
    private Double regionLat;

    @Column(name="region_lon")
    private Double regionLon;

    @OneToMany(mappedBy = "region", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JsonBackReference
    private List<Board> boardList;

    @OneToMany(mappedBy = "region", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JsonBackReference
    private List<User> userList;

    @Builder
    public Region(String sido, String sigungu, String eupMyeonDong, String nearRegionId, Double regionLat, Double regionLon) {
        this.sido = sido;
        this.sigungu = sigungu;
        this.eupMyeonDong = eupMyeonDong;
        this.nearRegionId = nearRegionId;
        this.regionLat = regionLat;
        this.regionLon = regionLon;
    }

    public String getRegionAddress(){
        return this.sido + " " + this.sigungu + " " + this.eupMyeonDong;
    }
}
