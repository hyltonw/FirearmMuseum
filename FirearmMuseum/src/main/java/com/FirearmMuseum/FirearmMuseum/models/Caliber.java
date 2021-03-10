package com.FirearmMuseum.FirearmMuseum.models;

public class Caliber {

    private Integer caliberId;
    private String caliberSize;
    private String caliberUnit;
    private String caliberDescription;
    private String url;



    public Caliber(){

    }

    public Caliber(Integer caliberId, String caliberSize, String caliberUnit, String url){
        this.caliberId = caliberId;
        this.caliberSize = caliberSize;
        this.caliberUnit = caliberUnit;
        this.url = url;
    }

    public Caliber(Caliber that){
        this.caliberId = that.caliberId;
        this.caliberUnit = that.caliberUnit;
        this.caliberSize = that.caliberSize;
        this.url = that.url;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
