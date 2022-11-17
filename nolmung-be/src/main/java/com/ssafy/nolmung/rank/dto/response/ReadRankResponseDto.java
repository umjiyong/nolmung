package com.ssafy.nolmung.rank.dto.response;

import com.ssafy.nolmung.friend.domain.Block;
import com.ssafy.nolmung.rank.domain.Rank;
import com.ssafy.nolmung.rank.domain.RankCategory;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ReadRankResponseDto implements Comparable<ReadRankResponseDto> {

//    private RankCategory rankCategory;
 private int userId;

 private String userNickname;
 private int rankScore;

 public ReadRankResponseDto(Rank rank) {

     this.userId = rank.getUserId();
     this.rankScore = rank.getRankScore();

 }


    @Override
    public int compareTo(ReadRankResponseDto o) {
        return o.rankScore - this.getRankScore();
    }
}