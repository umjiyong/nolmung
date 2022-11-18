package com.ssafy.nolmung.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResultDto<T> {

    private T data;
}
