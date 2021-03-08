import { Component, Input, OnInit } from '@angular/core';
import { Manufacturer } from 'src/app/models/manufacturer';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  @Input() manufacturer : Manufacturer;
  @Input() name : string;

  constructor() { }

  ngOnInit(): void {
    this.name = this.manufacturer.manufacturer.replace(/\s/g,"").toLowerCase();

    console.log(this.manufacturer)
  }

}
