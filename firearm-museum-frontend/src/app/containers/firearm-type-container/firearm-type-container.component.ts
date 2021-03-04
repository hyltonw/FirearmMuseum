import { Component, Input, OnInit } from '@angular/core';
import { FirearmType } from 'src/app/models/firearm-type';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-firearm-type-container',
  templateUrl: './firearm-type-container.component.html',
  styleUrls: ['./firearm-type-container.component.css']
})
export class FirearmTypeContainerComponent implements OnInit {

  @Input() firearmtypes : FirearmType[];

  constructor(private firearmtypeservice : MuseumService ) {}

  ngOnInit(): void { 
    this.firearmtypeservice.getAllFirearmTypes().subscribe( list => {
      this.firearmtypes = list;
    })
  }

}
