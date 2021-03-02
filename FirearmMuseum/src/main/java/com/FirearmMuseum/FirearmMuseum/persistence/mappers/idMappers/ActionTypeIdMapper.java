package com.FirearmMuseum.FirearmMuseum.persistence.mappers.idMappers;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ActionTypeIdMapper implements RowMapper<Integer> {


    @Override
    public Integer mapRow(ResultSet resultSet, int i) throws SQLException {
        return resultSet.getInt("actiontypeid");
    }
}