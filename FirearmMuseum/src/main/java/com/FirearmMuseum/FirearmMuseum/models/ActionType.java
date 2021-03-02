package com.FirearmMuseum.FirearmMuseum.models;

public class ActionType {

    private Integer actionTypeId;
    private String actionType;

    public ActionType(){

    }

    public ActionType(Integer actionTypeId, String actionType){
        this.actionTypeId = actionTypeId;
        this.actionType = actionType;
    }

    public ActionType(ActionType that){
        this.actionTypeId = that.actionTypeId;
        this.actionType = that.actionType;
    }

    public Integer getActionTypeId() {
        return actionTypeId;
    }

    public void setActionTypeId(Integer actionTypeId) {
        actionTypeId = actionTypeId;
    }

    public String getActionType() {
        return actionType;
    }

    public void setActionType(String actionType) {
        actionType = actionType;
    }

}
