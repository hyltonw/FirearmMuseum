package com.FirearmMuseum.FirearmMuseum.models;

public class Caliber {

    private Integer caliberId;
    private String caliberSize;
    private String caliberUnit;
    private String caliberDescription;
    private String caliberUrl;



    public Caliber(){

    }

    public Caliber(Integer caliberId, String caliberSize, String caliberUnit, String caliberUrl){
        this.caliberId = caliberId;
        this.caliberSize = caliberSize;
        this.caliberUnit = caliberUnit;
        this.caliberUrl = caliberUrl;
    }

    public Caliber(Caliber that){
        this.caliberId = that.caliberId;
        this.caliberUnit = that.caliberUnit;
        this.caliberSize = that.caliberSize;
        this.caliberUrl = that.caliberUrl;
    }

    public Integer getCaliberId() {
        return caliberId;
    }

    public void setCaliberId(Integer caliberId) {
        this.caliberId = caliberId;
    }

    public String getCaliberSize() {
        return caliberSize;
    }

    public void setCaliberSize(String caliberSize) {
        this.caliberSize = caliberSize;
    }

    public String getCaliberUnit() {
        return caliberUnit;
    }

    public void setCaliberUnit(String caliberUnit) {
        this.caliberUnit = caliberUnit;
    }

    public String getCaliberDescription() {
        return caliberDescription;
    }

    public void setCaliberDescription(String caliberDescription) {
        this.caliberDescription = caliberDescription;
    }

    public String getCaliberUrl() {
        return caliberUrl;
    }

    public void setCaliberUrl(String caliberUrl) {
        this.caliberUrl = caliberUrl;
    }
}
