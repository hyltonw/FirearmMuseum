package com.FirearmMuseum.FirearmMuseum.models;

public class HydratedFirearm {

    private Integer firearmId;
    private String name;
    private Caliber caliber;
    private Manufacturer manufacturer;
    private ActionType actionType;
    private FirearmType firearmType;
    private Integer productionDate;
    private Integer serialNumber;
    private String description;
    private String donatedBy;
    private String url;




    public HydratedFirearm(){

    }

    public HydratedFirearm(Firearm toHydrate){
        this.firearmId = toHydrate.getFirearmId();
        this.name = toHydrate.getName();
        this.productionDate = toHydrate.getProductionDate();
        this.serialNumber = toHydrate.getSerialNumber();
        this.description = toHydrate.getDescription();
        this.donatedBy = toHydrate.getDonatedBy();
        this.url = toHydrate.getFirearmUrl();
    }


    public Integer getFirearmId() {
        return firearmId;
    }

    public void setFirearmId(Integer firearmId) {
        this.firearmId = firearmId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Caliber getCaliber() {
        return caliber;
    }

    public void setCaliber(Caliber caliber) {
        this.caliber = caliber;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(Manufacturer manufacturer) {
        this.manufacturer = manufacturer;
    }

    public ActionType getActionType() {
        return actionType;
    }

    public void setActionType(ActionType actionType) {
        this.actionType = actionType;
    }

    public FirearmType getFirearmType() {
        return firearmType;
    }

    public void setFirearmType(FirearmType firearmType) {
        this.firearmType = firearmType;
    }

    public Integer getProductionDate() {
        return productionDate;
    }

    public void setProductionDate(Integer productionDate) {
        this.productionDate = productionDate;
    }

    public Integer getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(Integer serialNumber) {
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
