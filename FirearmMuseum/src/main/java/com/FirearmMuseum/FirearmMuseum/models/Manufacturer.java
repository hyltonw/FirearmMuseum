package com.FirearmMuseum.FirearmMuseum.models;

public class Manufacturer {

    private Integer manufacturerId;
    private String manufacturer;

    public Manufacturer(){

    }

    Manufacturer(Integer manufacturerId, String manufacturer){
        this.manufacturerId = manufacturerId;
        this.manufacturer = manufacturer;
    }

    Manufacturer(Manufacturer that){
        this.manufacturerId = that.manufacturerId;
        this.manufacturer = that.manufacturer;
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
}
