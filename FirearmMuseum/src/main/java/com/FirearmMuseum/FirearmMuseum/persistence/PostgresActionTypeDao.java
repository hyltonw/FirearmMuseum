package com.FirearmMuseum.FirearmMuseum.persistence;

import com.FirearmMuseum.FirearmMuseum.models.ActionType;
import com.FirearmMuseum.FirearmMuseum.persistence.Dao.ActionTypeDao;
import com.FirearmMuseum.FirearmMuseum.persistence.mappers.ActionTypeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class PostgresActionTypeDao implements ActionTypeDao {

    @Autowired
    private JdbcTemplate template;


    @Override
    public List<ActionType> getAllActionTypes() {

        List<ActionType> allActionTypes = template.query("SELECT * FROM \"ActionType\"",
                new ActionTypeMapper());

        return allActionTypes;
    }

    @Override
    public ActionType addActionType(ActionType toAdd) {
    return null;
    }

    @Override
    public void editActionType(Integer id, ActionType toEdit) {

    }

    @Override
    public ActionType removeActionTypeById(Integer id) {
        return null;
    }

    @Override
    public ActionType getActionTypeById(Integer id) {
        return null;
    }
}
