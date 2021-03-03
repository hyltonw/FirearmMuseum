import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firearm } from '../../models/firearm';
import { MuseumService } from '../../museum.service';

@Component({
  selector: 'app-add-firearm',
  templateUrl: './add-firearm.component.html',
  styleUrls: ['./add-firearm.component.css']
})
export class AddFirearmComponent implements OnInit {

  name : string;
  caliberId : number;
  manufacturerId : number;
  actionTypeId : number;
  firearmTypeId : number;
  productionDate : number;
  serialNumber : number;
  description : string;
  donatedBy : string;

  constructor(private service : MuseumService, private router : Router) { }

  ngOnInit(): void {
  }

  addFirearm() {
    if(this.productionDate > 2021 || this.productionDate < 1688){
      alert("wrong date");
      return;
    }
    let toAdd : Firearm = {
      name: this.name, 
      caliberId: this.caliberId, manufacturerId : this.manufacturerId, 
      actionTypeId: this.actionTypeId, firearmTypeId : this.firearmTypeId, 
      productionDate : this.productionDate, serialNumber : this.serialNumber,
      description : this.description, donatedBy : this.donatedBy}
      console.log(toAdd);
      this.service.addFirearm(toAdd).subscribe(a => console.log(a));
  }

}
