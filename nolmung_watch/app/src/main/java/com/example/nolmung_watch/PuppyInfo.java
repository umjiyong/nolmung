package com.example.nolmung_watch;

public class PuppyInfo {
    private String puppyName;
    private String breedAge;
    private String puppyWalkNeeds;

    public PuppyInfo(String puppyName, String breedAge, String puppyWalkNeeds) {
        this.puppyName = puppyName;
        this.breedAge = breedAge;
        this.puppyWalkNeeds = puppyWalkNeeds;
    }

    public String getPuppyName() {
        return puppyName;
    }

    public void setPuppyName(String puppyName) {
        this.puppyName = puppyName;
    }

    public String getBreedAge() {
        return breedAge;
    }

    public void setBreedAge(String breedAge) {
        this.breedAge = breedAge;
    }

    public String getPuppyWalkNeeds() {
        return puppyWalkNeeds;
    }

    public void setPuppyWalkNeeds(String puppyWalkNeeds) {
        this.puppyWalkNeeds = puppyWalkNeeds;
    }
}
