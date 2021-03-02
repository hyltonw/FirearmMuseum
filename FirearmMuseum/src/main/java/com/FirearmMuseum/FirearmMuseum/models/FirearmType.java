package com.FirearmMuseum.FirearmMuseum.models;

public class FirearmType {

    private Integer firearmTypeId;
    private String firearmType;

    public FirearmType(){

    }

    public FirearmType(Integer firearmTypeId, String firearmType){
        this.firearmTypeId = firearmTypeId;
        this.firearmType = firearmType;
    }

    public FirearmType(FirearmType that){
        this.firearmTypeId = that.firearmTypeId;
        this.firearmType = that.firearmType;
    }

    public Integer getFirearmTypeId() {
        return firearmTypeId;
    }

    public void setFirearmTypeId(Integer firearmTypeId) {
        this.firearmTypeId = firearmTypeId;
    }

    public String getFirearmType() {
        return firearmType;
    }

    public void setFirearmType(String firearmType) {
        this.firearmType = firearmType;
    }
}
