import { Component, Input, OnInit } from '@angular/core';
import { Manufacturer } from 'src/app/models/manufacturer';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-manufacturer-container',
  templateUrl: './manufacturer-container.component.html',
  styleUrls: ['./manufacturer-container.component.css']
})
export class ManufacturerContainerComponent implements OnInit {

  @Input() manufacturers : Manufacturer[];

  constructor(private manufacturerservice : MuseumService) { }

  ngOnInit(): void { 
    this.manufacturerservice.getAllManufacturers().subscribe( list => {
      list.sort((a,b) => (a.manufacturer > b.manufacturer ? 1 : -1 ));
      this.manufacturers = list;
    })
  }

}
