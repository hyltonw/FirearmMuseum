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

  nToAdd : string;
  atToAdd : ActionType;
  cToAdd : Caliber;
  ftToAdd : FirearmType;
  mToAdd : Manufacturer;
  dToAdd : string;
  pdToAdd : number;
  snToAdd : number;
  dbToAdd : string;

  imgSrc : string = "https://i.imgur.com/FK3SITD.png";

  manufacturers : Manufacturer[];
  calibers : Caliber[];
  actionTypes : ActionType[];
  firearmTypes : FirearmType[];

  constructor(private service : MuseumService, private router : Router) { }

  

  ngOnInit(): void {

    this.service.getAllManufacturers().subscribe( list => {
      this.manufacturers = list;
      console.log(this.manufacturers)
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
    console.log(this.manufacturers)
  }

  addFirearm() {

    
    if(this.nToAdd===""){
      alert("Enter a name");
      return;
    }
    if(this.cToAdd===null){
      alert("Select a caliber");
      return;
    }
    if(this.mToAdd===null){
      alert("Select a manufacturer");
      return;
    }
    if(this.atToAdd===null){
      alert("Select an action type");
      return;
    }
    if(this.ftToAdd===null){
      alert("Select a firearm type");
      return;
    }
    if(this.pdToAdd<1655 || this.pdToAdd > 2021){
      alert("Invalid production year added");
      return;
    }
    if(this.dToAdd===""){
      alert("Enter a desription");
      return;
    }
    if(this.imgSrc==="" || this.imgSrc==="https://i.imgur.com/FK3SITD.png"){
      alert("Enter an image url");
      return;
    }

    this.dehydratedFirearm = {
    name: this.nToAdd,
    caliberId: this.cToAdd.caliberId,
    manufacturerId : this.mToAdd.manufacturerId,
    actionTypeId: this.atToAdd.actionTypeId,
    firearmTypeId: this.ftToAdd.firearmTypeId,
    productionDate: this.pdToAdd,
    serialNumber: this.snToAdd,
    description: this.dToAdd,
    donatedBy: this.dbToAdd,
    firearmUrl: this.imgSrc
    }
    this.router.navigateByUrl("/hydratedfirearm")
    return this.service.addFirearm(this.dehydratedFirearm).subscribe(x => console.log(x));  

  }

}