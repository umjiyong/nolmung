package com.ssafy.nolmung.puppy.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.nolmung.familyConnect.domain.FamilyConnect;
import com.ssafy.nolmung.user.domain.User;
import com.ssafy.nolmung.walk.domain.Walk;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Puppy {

    @Column(name = "puppy_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int puppyId;

    @Column(name = "puppy_name")
    private String puppyName;

    @Column(name = "puppy_birth")
    private LocalDate puppyBirth;

    @Column(name = "puppy_weight")
    private int puppyWeight;

    @Column(name = "puppy_sex")
    private int puppySex;

    @Column(name = "puppy_is_neutered")
    private boolean puppyIsNeutered;

    @Column(name = "puppy_character")
    private String puppyCharacter;

    @Column(name = "puppy_walk_needs")
    private int puppyWalkNeeds;

    @Column(name = "puppy_code")
    private String puppyCode;

    @Column(name = "puppy_update_date")
    private LocalDateTime puppyUpdateDate;

    @Column(name = "puppy_img")
    private String puppyImg;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "user_id")
//    @JsonBackReference
//    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "breed_id")
    @JsonBackReference
    private Breed breed;

    @OneToMany(mappedBy = "puppy")
    @JsonManagedReference
    private List<FamilyConnect> familyConnectList = new ArrayList<>();

    @OneToMany(mappedBy = "puppy")
    @JsonManagedReference
    private List<Walk> walkList = new ArrayList<>();

    @Builder
    public Puppy(int puppyId, String puppyName, LocalDate puppyBirth, int puppyWeight, int puppySex, boolean puppyIsNeutered, String puppyCharacter, int puppyWalkNeeds, String puppyCode, LocalDateTime puppyUpdateDate, String puppyImg, Breed breed, List<FamilyConnect> familyConnectList, List<Walk> walkList) {
        this.puppyId = puppyId;
        this.puppyName = puppyName;
        this.puppyBirth = puppyBirth;
        this.puppyWeight = puppyWeight;
        this.puppySex = puppySex;
        this.puppyIsNeutered = puppyIsNeutered;
        this.puppyCharacter = puppyCharacter;
        this.puppyWalkNeeds = puppyWalkNeeds;
        this.puppyCode = puppyCode;
        this.puppyUpdateDate = puppyUpdateDate;
        this.puppyImg = puppyImg;
        this.breed = breed;
        this.familyConnectList = familyConnectList;
        this.walkList = walkList;
    }
}
