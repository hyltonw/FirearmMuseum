import { Component, Input, OnInit } from '@angular/core';
import { Manufacturer } from 'src/app/models/manufacturer';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  @Input() manufacturer : Manufacturer;
  @Input() name : string;

  editing : boolean = true;

  constructor(private service: MuseumService) { }

  ngOnInit(): void {
    this.name = this.manufacturer.manufacturer.replace(/\s/g,"").toLowerCase();

    console.log(this.manufacturer)
  }

  toggleEdit(){
    this.editing = !this.editing;
  }

  editManufacturer(){
    this.editing = !this.editing;
    this.service.editManufacturer(this.manufacturer,this.manufacturer.manufacturerId).subscribe(x => console.log(x));
  }

  removeManufacturer(){
    this.editing =!this.editing;
    this.service.removeManufacturer(this.manufacturer.manufacturerId).subscribe(x => console.log(x));
  }

}
