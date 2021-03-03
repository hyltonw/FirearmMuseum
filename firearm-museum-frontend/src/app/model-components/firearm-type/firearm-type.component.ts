import { Component, Input, OnInit } from '@angular/core';
import {FirearmType} from '../../models/firearm-type'

@Component({
  selector: 'app-firearm-type',
  templateUrl: './firearm-type.component.html',
  styleUrls: ['./firearm-type.component.css']
})
export class FirearmTypeComponent implements OnInit {

  @Input() firearmType : FirearmType;

  constructor() { }

  ngOnInit(): void {
    console.log(this.firearmType)
  }

}
