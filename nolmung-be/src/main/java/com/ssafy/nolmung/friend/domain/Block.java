package com.ssafy.nolmung.friend.domain;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Block {

    @Column(name = "block_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotBlank
    private int blockId;

    @JoinColumn (name = "user_id")
    @ManyToOne(fetch= FetchType.LAZY)
    @Setter(AccessLevel.NONE)
    private int userId;

    @Builder
    public Block (int userId ) {
        this.userId = userId;
    }


}
