package com.ssafy.nolmung.InAppAlarm.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.nolmung.InAppAlarm.dto.response.InAppAlarmResponse;
import com.ssafy.nolmung.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InAppAlarm {

    @Column(name = "in_app_alarm_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int inAppAlarmId;

    @Column(name = "in_app_alarm_update_date")
    private LocalDateTime inAppAlarmUpdateDate;

    @Column(name = "in_app_alarm_content")
    private String inAppAlarmContent;

    @Column(name = "in_app_alarm_link")
    private String inAppAlarmLink;

    @Column(name = "in_app_alarm_is_check")
    private boolean inAppAlarmIsCheck;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;


    @Builder
    public InAppAlarm(int inAppAlarmId, LocalDateTime inAppAlarmUpdateDate, String inAppAlarmContent, String inAppAlarmLink, boolean inAppAlarmIsCheck, User user) {
        this.inAppAlarmId = inAppAlarmId;
        this.inAppAlarmUpdateDate = inAppAlarmUpdateDate;
        this.inAppAlarmContent = inAppAlarmContent;
        this.inAppAlarmLink = inAppAlarmLink;
        this.inAppAlarmIsCheck = inAppAlarmIsCheck;
        this.user = user;

    }

    public void updateRead() {
        this.inAppAlarmIsCheck = true;
    }

    public InAppAlarmResponse toInAppAlarmResponse() {
        String inappAlarmDate = this.getInAppAlarmUpdateDate().format(DateTimeFormatter.ofPattern("yyyy년 MM월 dd일"));
        return InAppAlarmResponse.builder()
                .inAppAlarmId(this.getInAppAlarmId())
                .inAppAlarmUpdateDate(inappAlarmDate)
                .inAppAlarmLink(this.getInAppAlarmLink())
                .inAppAlarmContent(this.getInAppAlarmContent())
                .inAppAlarmIsCheck(this.isInAppAlarmIsCheck())
                .build();
    }
}
