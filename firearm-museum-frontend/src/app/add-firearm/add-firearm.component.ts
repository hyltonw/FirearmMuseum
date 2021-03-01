import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Firearm } from '../Firearm';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-add-firearm',
  templateUrl: './add-firearm.component.html',
  styleUrls: ['./add-firearm.component.css']
})
export class AddFirearmComponent implements OnInit {

  name : string;
  caliberId : number;
  manufactureId : number;
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
    let toAdd : Firearm = {
      name: this.name, caliberId: this.caliberId, manufactureId : this.manufactureId, 
      actionTypeId: this.actionTypeId, firearmTypeId : this.firearmTypeId, 
      productionDate : this.productionDate, serialNumber : this.serialNumber,
      description : this.description, donatedBy : this.donatedBy}
    
      this.service.addFirearm(toAdd).subscribe((_) => {this.router.navigate([""])})
  }

}
