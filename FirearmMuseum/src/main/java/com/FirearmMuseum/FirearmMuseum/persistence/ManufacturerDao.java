package com.FirearmMuseum.FirearmMuseum.persistence;

import com.FirearmMuseum.FirearmMuseum.models.Manufacturer;

import java.util.List;

public interface ManufacturerDao {

    List<Manufacturer> getAllManufacturers();

    Manufacturer addManufacturer(Manufacturer toAdd);

    void editManufacturer(Integer id, Manufacturer toEdit);

    Manufacturer removeManufacturerById(Integer id);

    Manufacturer getManufacturerById(Integer id);

}
