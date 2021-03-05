package com.FirearmMuseum.FirearmMuseum.models;

public class Caliber {

    private Integer caliberId;
    private Double caliberSize;
    private String caliberUnit;
    private String caliberDescription;


    public Caliber(){

    }

    public Caliber(Integer caliberId, Double caliberSize, String caliberUnit){
        this.caliberId = caliberId;
        this.caliberSize = caliberSize;
        this.caliberUnit = caliberUnit;
    }

    public Caliber(Caliber that){
        this.caliberId = that.caliberId;
        this.caliberUnit = that.caliberUnit;
        this.caliberSize = that.caliberSize;
    }

    public Integer getCaliberId() {
        return caliberId;
    }

    public void setCaliberId(Integer caliberId) {
        this.caliberId = caliberId;
    }

    public Double getCaliberSize() {
        return caliberSize;
    }

    public void setCaliberSize(Double caliberSize) {
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
}
