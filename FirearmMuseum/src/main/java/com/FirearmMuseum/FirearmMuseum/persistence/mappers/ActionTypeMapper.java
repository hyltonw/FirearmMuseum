package com.FirearmMuseum.FirearmMuseum.persistence.mappers;

import com.FirearmMuseum.FirearmMuseum.models.ActionType;
import com.FirearmMuseum.FirearmMuseum.models.FirearmType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ActionTypeMapper implements RowMapper<ActionType> {

    @Override
    public ActionType mapRow(ResultSet resultSet, int i) throws SQLException {
        ActionType  mappedActionType = new ActionType();
        mappedActionType.setActionTypeId(resultSet.getInt("actiontypeid"));
        mappedActionType.setActionType(resultSet.getString("actiontypename"));

        return mappedActionType;
    }
}
