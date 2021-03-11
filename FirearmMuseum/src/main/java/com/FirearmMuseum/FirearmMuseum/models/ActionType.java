package com.FirearmMuseum.FirearmMuseum.models;

public class ActionType {

    private Integer actionTypeId;
    private String actionType;
    private String actionTypeDescription;
    private String actionTypeUrl;

    public ActionType(){

    }

    public ActionType(Integer actionTypeId, String actionType, String ActionTypeUrl){
        this.actionTypeId = actionTypeId;
        this.actionType = actionType;
        this.actionTypeUrl = ActionTypeUrl;
    }

    public ActionType(ActionType that){
        this.actionTypeId = that.actionTypeId;
        this.actionType = that.actionType;
        this.actionTypeUrl = that.actionTypeUrl;
    }

    public Integer getActionTypeId() {
        return actionTypeId;
    }

    public void setActionTypeId(Integer actionTypeId) {
        this.actionTypeId = actionTypeId;
    }

    public String getActionType() {
        return actionType;
    }

    public void setActionType(String actionType) {
        this.actionType = actionType;
    }

    public String getActionTypeDescription() {
        return actionTypeDescription;
    }

    public void setActionTypeDescription(String actionTypeDescription) {
        this.actionTypeDescription = actionTypeDescription;
    }

    public String getActionTypeUrl() {
        return actionTypeUrl;
    }

    public void setActionTypeUrl(String actionTypeUrl) {
        this.actionTypeUrl = actionTypeUrl;
    }
}
