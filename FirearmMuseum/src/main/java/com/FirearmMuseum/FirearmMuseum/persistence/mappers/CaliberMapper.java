package com.FirearmMuseum.FirearmMuseum.persistence.mappers;

import com.FirearmMuseum.FirearmMuseum.models.Caliber;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CaliberMapper implements RowMapper<Caliber> {

    @Override
    public Caliber mapRow(ResultSet resultSet, int i) throws SQLException {
        Caliber mappedCaliber = new Caliber();
        mappedCaliber.setCaliberId(resultSet.getInt("caliberid"));
        mappedCaliber.setCaliberUnit(resultSet.getString("caliberunit"));
        mappedCaliber.setCaliberSize(resultSet.getString("calibersize"));
        mappedCaliber.setCaliberDescription(resultSet.getString("caliberdescription"));
        mappedCaliber.setUrl(resultSet.getString("caliberurl"));

        return mappedCaliber;

    }
}
