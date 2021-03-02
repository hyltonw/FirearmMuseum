package com.FirearmMuseum.FirearmMuseum.persistence;

import com.FirearmMuseum.FirearmMuseum.models.ActionType;

import java.util.List;

public interface ActionTypeDao {

    List<ActionType> getAllActionTypes();

    ActionType addActionType(ActionType toAdd);

    void editActionType(Integer id, ActionType toEdit);

    ActionType removeActionTypeById(Integer id);

    ActionType getActionTypeById(Integer id);
}
