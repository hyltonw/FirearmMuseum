package com.FirearmMuseum.FirearmMuseum.persistence.mappers;

import com.FirearmMuseum.FirearmMuseum.models.ActionType;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ActionTypeMapper implements RowMapper<ActionType> {

    @Override
    public ActionType mapRow(ResultSet resultSet, int i) throws SQLException {
        ActionType  mappedActionType = new ActionType();
        Integer x = resultSet.getInt("actiontypeid");
        String y = resultSet.getString("actiontypename");
        String z = resultSet.getString("actiontypedescription");
        String a = resultSet.getString("actiontypeurl");

        mappedActionType.setActionTypeId(x);
        mappedActionType.setActionType(y);
        mappedActionType.setActionTypeDescription(z);
        mappedActionType.setUrl(a);
        return mappedActionType;
    }
}
