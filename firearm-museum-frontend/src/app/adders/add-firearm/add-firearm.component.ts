import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionType } from 'src/app/models/action-type';
import { Caliber } from 'src/app/models/caliber';
import { FirearmType } from 'src/app/models/firearm-type';
import { HydratedFirearm } from 'src/app/models/hydrated-firearm';
import { Manufacturer } from 'src/app/models/manufacturer';
import { Firearm } from '../../models/firearm';
import { MuseumService } from '../../museum.service';

@Component({
  selector: 'app-add-firearm',
  templateUrl: './add-firearm.component.html',
  styleUrls: ['./add-firearm.component.css']
})
export class AddFirearmComponent implements OnInit {

  hydratedFirearm : HydratedFirearm;
  dehydratedFirearm : Firearm;

  atToAdd : ActionType;
  cToAdd : Caliber;
  ftToAdd : FirearmType;
  mToAdd : Manufacturer;
  dToAdd : string;
  pdToAdd : number;

  manufacturers : Manufacturer[];
  calibers : Caliber[];
  actionTypes : ActionType[];
  firearmTypes : FirearmType[];

  constructor(private service : MuseumService, private router : Router) { }

  

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

  }

  logList(){
    console.log(this.mToAdd)
    console.log(this.cToAdd)
    console.log(this.atToAdd)
    console.log(this.ftToAdd)
  }

  addFirearm( nameToAdd: string, 
              caliberToAdd: Caliber, 
              manufacturerToAdd : Manufacturer, 
              actionTypeToAdd: ActionType, 
              firearmTypeToAdd : FirearmType, 
              productionDateToAdd : number, 
              serialNumberToAdd : number,
              descriptionToAdd : string, 
              donatedByToAdd : string) {


  }

}