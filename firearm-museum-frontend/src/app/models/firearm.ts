export interface Firearm{
    id? : number;
    name : string;
    caliberId : number;
    manufacturerId : number;
    actionTypeId : number;
    firearmTypeId : number;
    productionDate : number;
    serialNumber : number;
    description : string;
    donatedBy : string;
    firearmUrl?: string;

}