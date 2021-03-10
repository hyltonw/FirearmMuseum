package com.FirearmMuseum.FirearmMuseum.models;

public class ActionType {

    private Integer actionTypeId;
    private String actionType;
    private String actionTypeDescription;
    private String url;

    public ActionType(){

    }

    public ActionType(Integer actionTypeId, String actionType, String url){
        this.actionTypeId = actionTypeId;
        this.actionType = actionType;
        this.url = url;
    }

    public ActionType(ActionType that){
        this.actionTypeId = that.actionTypeId;
        this.actionType = that.actionType;
        this.url = that.url;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
