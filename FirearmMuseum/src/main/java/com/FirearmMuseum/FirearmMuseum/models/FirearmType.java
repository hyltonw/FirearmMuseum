package com.FirearmMuseum.FirearmMuseum.models;

public class FirearmType {

    private Integer firearmTypeId;
    private String firearmType;
    private String firearmTypeDescription;
    private String url;


    public FirearmType(){

    }

    public FirearmType(Integer firearmTypeId, String firearmType, String url){
        this.firearmTypeId = firearmTypeId;
        this.firearmType = firearmType;
        this.url = url;
    }

    public FirearmType(FirearmType that){
        this.firearmTypeId = that.firearmTypeId;
        this.firearmType = that.firearmType;
        this.url = that.url;
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

    public String getFirearmTypeDescription() {
        return firearmTypeDescription;
    }

    public void setFirearmTypeDescription(String firearmTypeDescription) {
        this.firearmTypeDescription = firearmTypeDescription;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
