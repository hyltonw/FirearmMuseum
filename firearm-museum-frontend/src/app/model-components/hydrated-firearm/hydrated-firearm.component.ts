import { Component, Input, OnInit } from '@angular/core';
import { ActionType } from 'src/app/models/action-type';
import { Caliber } from 'src/app/models/caliber';
import { FirearmType } from 'src/app/models/firearm-type';
import { HydratedFirearm } from 'src/app/models/hydrated-firearm';
import { Manufacturer } from 'src/app/models/manufacturer';
import { MuseumService } from 'src/app/museum.service';
import { Firearm } from 'src/app/models/firearm'

@Component({
  selector: 'app-hydrated-firearm',
  templateUrl: './hydrated-firearm.component.html',
  styleUrls: ['./hydrated-firearm.component.css']
})
export class HydratedFirearmComponent implements OnInit {

  @Input() hydratedFirearm : HydratedFirearm;
  dehydratedFirearm : Firearm;

  gunName : string;
  manufacturerName : string;

  manufacturers : Manufacturer[];
  calibers : Caliber[];
  actionTypes : ActionType[];
  firearmTypes : FirearmType[];

  containerPicker : string;
  editing : boolean = true;

  constructor(private service : MuseumService) { }

  ngOnInit(): void {
    
    this.service.getAllManufacturers().subscribe( list => {
      this.manufacturers = list;
    })

    this.service.getAllCalibers().subscribe( list => {
      this.calibers = list;
    })

    this.service.getAllActionTypes().subscribe( list => {
      this.actionTypes = list;
    })

    this.service.getAllFirearmTypes().subscribe( list => {
      this.firearmTypes = list;
    })
      
      //gets rid of spaces in firearm name and lowercases the whole thing for indexing purposes
    this.gunName = this.hydratedFirearm.name.replace(" ","").toLowerCase();
    
      //gets rid of spaces in manufacturer name and then capitlizes first letter
    this.manufacturerName = this.hydratedFirearm.manufacturer.manufacturer.replace(" ","").toLowerCase();
    
    if(this.hydratedFirearm.firearmType.firearmType.toLowerCase()=="pistol" || this.hydratedFirearm.firearmType.firearmType.toLowerCase()=="revolver" ){
      this.containerPicker = "shortgun";
    } else {
      this.containerPicker = "longgun";
    }
  }

  toggleEdit(){
    this.editing=!this.editing
    console.log("hydrated firearm")
    console.log(this.hydratedFirearm)
    console.log("dehydrated firearm")
    console.log(this.dehydratedFirearm);
  }

  editHydratedFirearm(){
    this.editing=!this.editing
    
    this.dehydratedFirearm = 
    {
    name : this.hydratedFirearm.name, 
    caliberId : this.hydratedFirearm.caliber.caliberId,
    manufacturerId: this.hydratedFirearm.manufacturer.manufacturerId, 
    firearmTypeId : this.hydratedFirearm.firearmType.firearmTypeId,
    actionTypeId: this.hydratedFirearm.actionType.actionTypeId,
    productionDate : this.hydratedFirearm.productionDate,
    serialNumber : this.hydratedFirearm.serialNumber,
    description : this.hydratedFirearm.description,
    donatedBy : this.hydratedFirearm.donatedBy,
    firearmUrl : this.hydratedFirearm.url
  }

    this.service.editFirearm(this.dehydratedFirearm, this.hydratedFirearm.firearmId).subscribe(x => console.log(x))
  }

  removeHydratedFirearm(){
    return this.service.removeFirearm(this.hydratedFirearm.firearmId).subscribe(x => console.log(x));
  }



}
