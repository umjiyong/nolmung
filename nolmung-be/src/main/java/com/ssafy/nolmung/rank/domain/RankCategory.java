package com.ssafy.nolmung.rank.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum RankCategory {

    daily("daily"),
    weekly("weekly"),
    monthly("monthly");

    private final String category;

    @Override
    public String toString() {
        return category;
    }
}
