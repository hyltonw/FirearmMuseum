package com.FirearmMuseum.FirearmMuseum.models;

public class Firearm {

    private Integer firearmId;
    private String name;
    private Integer caliberId;
    private Integer manufacturerId;
    private Integer actionTypeId;
    private Integer firearmTypeId;
    private Integer productionDate;
    private Integer serialNumber;
    private String description;
    private String donatedBy;
    private String firearmUrl;


    public Firearm(){

    }

    public Firearm(String name, Integer caliberId, Integer manufacturer, Integer actionType, Integer firearmType,
                   Integer productionDate, Integer serialNumber, String description, String donatedBy, Integer firearmId,
                   String firearmUrl){

        this.firearmId = firearmId;
        this.name = name;
        this.caliberId = caliberId;
        this.manufacturerId = manufacturer;
        this.actionTypeId = actionType;
        this.firearmTypeId = firearmType;
        this.productionDate = productionDate;
        this.serialNumber = serialNumber;
        this.description = description;
        this.donatedBy = donatedBy;
        this.firearmUrl = firearmUrl;
    }

//    public Firearm(String name, Integer caliberId, Integer manufacturer, Integer actionType, Integer firearmType,
//                   Integer productionDate, Integer serialNumber, String description, String donatedBy, Integer firearmId,
//                   Caliber firearmCaliber){
//
//        this.firearmId = firearmId;
//        this.name = name;
//        this.caliberId = caliberId;
//        this.manufacturerId = manufacturer;
//        this.actionTypeId = actionType;
//        this.firearmTypeId = firearmType;
//        this.productionDate = productionDate;
//        this.serialNumber = serialNumber;
//        this.description = description;
//        this.donatedBy = donatedBy;
//        this.firearmCaliber = firearmCaliber;
//
//    }

    public Firearm(Firearm that){
        this.firearmId = that.firearmId;
        this.name = that.name;
        this.caliberId = that.caliberId;
        this.firearmTypeId = that.firearmTypeId;
        this.actionTypeId = that.actionTypeId;
        this.manufacturerId = that.manufacturerId;
        this.productionDate = that.productionDate;
        this.serialNumber = that.serialNumber;
        this.description = that.description;
        this.donatedBy = that.donatedBy;
        this.firearmUrl = that.firearmUrl;
    }

    public Integer getFirearmId() {
        return firearmId;
    }

    public void setFirearmId(Integer firearmId) {
        this.firearmId = firearmId;
    }

    public void setProductionDate(Integer productionDate) {
        this.productionDate = productionDate;
    }

    public void setSerialNumber(Integer serialNumber) {
        this.serialNumber = serialNumber;
    }

    public Integer getManufacturerId() {
        return manufacturerId;
    }

    public void setManufacturerId(Integer manufacturerId) {
        this.manufacturerId = manufacturerId;
    }

    public Integer getActionTypeId() {
        return actionTypeId;
    }

    public void setActionTypeId(Integer actionTypeId) {
        this.actionTypeId = actionTypeId;
    }

    public Integer getFirearmTypeId() {
        return firearmTypeId;
    }

    public void setFirearmTypeId(Integer firearmTypeId) {
        this.firearmTypeId = firearmTypeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getProductionDate() {
        return productionDate;
    }

    public void setProductionDate(int productionDate) {
        this.productionDate = productionDate;
    }

    public Integer getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(int serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDonatedBy() {
        return donatedBy;
    }

    public void setDonatedBy(String donatedBy) {
        this.donatedBy = donatedBy;
    }

    public Integer getCaliberId() {
        return caliberId;
    }

    public void setCaliberId(Integer caliberId) {
        this.caliberId = caliberId;
    }

    public String getFirearmUrl() {
        return firearmUrl;
    }

    public void setFirearmUrl(String firearmUrl) {
        this.firearmUrl = firearmUrl;
    }
}
