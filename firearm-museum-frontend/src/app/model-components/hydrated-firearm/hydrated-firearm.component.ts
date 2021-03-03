import { Component, Input, OnInit } from '@angular/core';
import { HydratedFirearm } from 'src/app/models/hydrated-firearm';

@Component({
  selector: 'app-hydrated-firearm',
  templateUrl: './hydrated-firearm.component.html',
  styleUrls: ['./hydrated-firearm.component.css']
})
export class HydratedFirearmComponent implements OnInit {

  @Input() hydratedFirearm : HydratedFirearm;

  constructor() { }

  ngOnInit(): void {
    console.log(this.hydratedFirearm)
  }

}
