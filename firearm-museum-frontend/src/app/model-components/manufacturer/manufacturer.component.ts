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

  editing : boolean = true;
  imgSrc : string;

  constructor(private service: MuseumService) { }

  ngOnInit(): void {
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
    if(confirm("Are you sure you would like to delete the entry?")){
      this.editing =!this.editing;
      this.service.removeManufacturer(this.manufacturer.manufacturerId).subscribe(x => console.log(x));
      window.location.reload()
    }
  }

}
