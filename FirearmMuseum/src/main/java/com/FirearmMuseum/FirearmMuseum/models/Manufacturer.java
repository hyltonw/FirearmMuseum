package com.FirearmMuseum.FirearmMuseum.models;

public class Manufacturer {

    private Integer manufacturerId;
    private String manufacturer;
    private String manufacturerDescription;
    private String url;


    public Manufacturer(){

    }

    public Manufacturer(Integer manufacturerId, String manufacturer, String url){
        this.manufacturerId = manufacturerId;
        this.manufacturer = manufacturer;
        this.url = url;
    }

    public Manufacturer(Manufacturer that){
        this.manufacturerId = that.manufacturerId;
        this.manufacturer = that.manufacturer;
        this.url = that.url;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
