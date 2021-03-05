package com.FirearmMuseum.FirearmMuseum.persistence.mappers;

import com.FirearmMuseum.FirearmMuseum.models.Manufacturer;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ManufacturerMapper implements RowMapper<Manufacturer> {
    @Override
    public Manufacturer mapRow(ResultSet resultSet, int i) throws SQLException {
        Manufacturer mappedManufacturer = new Manufacturer();
        mappedManufacturer.setManufacturerId(resultSet.getInt("manufacturersid"));
        mappedManufacturer.setManufacturer(resultSet.getString("manufacturername"));
        mappedManufacturer.setManufacturerDescription(resultSet.getString("manufacturerdescription"));

        return mappedManufacturer;
    }
}
