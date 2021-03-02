package com.FirearmMuseum.FirearmMuseum.persistence.Dao;

import com.FirearmMuseum.FirearmMuseum.models.ActionType;

import java.io.InvalidObjectException;
import java.util.List;

public interface ActionTypeDao {

    List<ActionType> getAllActionTypes();

    ActionType addActionType(ActionType toAdd) throws InvalidObjectException;

    void editActionType(Integer id, ActionType toEdit);

    void removeActionTypeById(Integer id);

    ActionType getActionTypeById(Integer id);
}
