package com.ssafy.nolmung.puppy.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Breed {
    @Column(name = "breed_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int breedId;

    @Column(name = "breed_name")
    private String breedName;

    @Column(name = "needs_walk_times")
    private int needsWalkTimes;

    @Column(name="upto_morethan")
    private int uptoMorethan;

    @OneToMany(mappedBy = "breed")
    @JsonManagedReference
    private List<Puppy> puppyList = new ArrayList<>();


    @Builder
    public Breed(int breedId, String breedName, List<Puppy> puppyList){
        this.breedId = breedId;
        this.breedName = breedName;
        this.puppyList = puppyList;
    }
}
