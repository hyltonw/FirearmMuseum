import { ActionType } from "./action-type";
import { Caliber } from "./Caliber";
import { FirearmType } from "./firearm-type";
import { Manufacturer } from "./manufacturer";

export interface HydratedFirearm{
    firearmId : number;
    name : string;
    caliber : Caliber;
    manufacturer : Manufacturer;
    actionType : ActionType;
    firearmType : FirearmType;
    productionDate? : number;
    serialNumber? : number;
    description? :  string;
    donatedBy? : string;
}