package com.FirearmMuseum.FirearmMuseum.models;

public class Manufacturer {

    private Integer manufacturerId;
    private String manufacturer;
    private String manufacturerDescription;
    private String manufacturerUrl;


    public Manufacturer(){

    }

    public Manufacturer(Integer manufacturerId, String manufacturer, String manufacturerUrl){
        this.manufacturerId = manufacturerId;
        this.manufacturer = manufacturer;
        this.manufacturerUrl = manufacturerUrl;
    }

    public Manufacturer(Manufacturer that){
        this.manufacturerId = that.manufacturerId;
        this.manufacturer = that.manufacturer;
        this.manufacturerUrl = that.manufacturerUrl;
    }

    public Integer getManufacturerId() {
        return manufacturerId;
    }

    public void setManufacturerId(Integer manufacturerId) {
        this.manufacturerId = manufacturerId;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getManufacturerDescription() {
        return manufacturerDescription;
    }

    public void setManufacturerDescription(String manufacturerDescription) {
        this.manufacturerDescription = manufacturerDescription;
    }

    public String getManufacturerUrl() {
        return manufacturerUrl;
    }

    public void setManufacturerUrl(String manufacturerUrl) {
        this.manufacturerUrl = manufacturerUrl;
    }
}
