import { Component, Input, OnInit } from '@angular/core';
import { HydratedFirearm } from 'src/app/models/hydrated-firearm';

@Component({
  selector: 'app-hydrated-firearm',
  templateUrl: './hydrated-firearm.component.html',
  styleUrls: ['./hydrated-firearm.component.css']
})
export class HydratedFirearmComponent implements OnInit {

  @Input() hydratedFirearm : HydratedFirearm;
  @Input() gunName : string;
  @Input() manufacturerName : string;
  @Input() containerPicker : string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.hydratedFirearm)
      
      //gets rid of spaces in firearm name and lowercases the whole thing for indexing purposes
    this.gunName = this.hydratedFirearm.name.replace(/\s/g,"").toLowerCase();
    
      //gets rid of spaces in manufacturer name and then capitlizes first letter
    this.manufacturerName = this.hydratedFirearm.manufacturer.manufacturer.replace(/\s/g,"").toLowerCase();
    if(this.hydratedFirearm.firearmType.firearmType.toLowerCase()=="pistol" || this.hydratedFirearm.firearmType.firearmType.toLowerCase()=="revolver" ){
      this.containerPicker = "shortgun";
    } else {
      this.containerPicker = "longgun";
    }

    console.log(this.containerPicker);

  }

}
