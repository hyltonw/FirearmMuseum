import { Component, Input, OnInit } from '@angular/core';
import { Firearm } from '../Firearm';

@Component({
  selector: 'app-firearm',
  templateUrl: './firearm.component.html',
  styleUrls: ['./firearm.component.css']
})
export class FirearmComponent implements OnInit {

  @Input()firearm : Firearm;

  constructor() { }

  ngOnInit(): void {
    console.log(this.firearm)
  }

}
