package com.FirearmMuseum.FirearmMuseum.persistence.mappers;

import com.FirearmMuseum.FirearmMuseum.models.FirearmType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FirearmTypeMapper implements RowMapper<FirearmType> {
    @Override
    public FirearmType mapRow(ResultSet resultSet, int i) throws SQLException {
        FirearmType mappedFirearmType = new FirearmType();
        mappedFirearmType.setFirearmTypeId(resultSet.getInt("firearmtypeid"));
        mappedFirearmType.setFirearmType(resultSet.getString("firearmtypename"));
        mappedFirearmType.setFirearmTypeDescription(resultSet.getString("firearmtypedescription"));
        mappedFirearmType.setFirearmTypeUrl(resultSet.getString("firearmtypeurl"));

        return mappedFirearmType;
    }
}
