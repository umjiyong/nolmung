package com.example.nolmung_watch;

public class PuppyInfo {
    private String puppyName;
    private String puppyWalkNeeds;

    public PuppyInfo(String puppyName, String puppyWalkNeeds) {
        this.puppyName = puppyName;
        this.puppyWalkNeeds = puppyWalkNeeds;
    }

    public String getPuppyName() {
        return puppyName;
    }

    public void setPuppyName(String puppyName) {
        this.puppyName = puppyName;
    }

    public String getPuppyWalkNeeds() {
        return puppyWalkNeeds;
    }

    public void setPuppyWalkNeeds(String puppyWalkNeeds) {
        this.puppyWalkNeeds = puppyWalkNeeds;
    }
}
