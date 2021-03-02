package com.FirearmMuseum.FirearmMuseum.persistence.Dao;

import com.FirearmMuseum.FirearmMuseum.models.Manufacturer;

import java.util.List;

public interface ManufacturerDao {

    List<Manufacturer> getAllManufacturers();

    Manufacturer addManufacturer(Manufacturer toAdd);

    void editManufacturer(Integer id, Manufacturer toEdit);

    void removeManufacturerById(Integer id);

    Manufacturer getManufacturerById(Integer id);

}
