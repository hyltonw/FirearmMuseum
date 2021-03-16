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
  preEditManufacturer : Manufacturer;

  editing : boolean = true;
  imgSrc : string;

  constructor(private service: MuseumService) { }

  ngOnInit(): void {
  }

  toggleEdit(){
    this.editing = !this.editing;
    this.preEditManufacturer = {...this.manufacturer}
    console.log("pre edit")
    console.log(this.preEditManufacturer.manufacturerDescription)
    console.log("manufacturer")
    console.log(this.manufacturer.manufacturerDescription)
  }

  editManufacturer(){
    this.editing = !this.editing;
    this.service.editManufacturer(this.manufacturer,this.manufacturer.manufacturerId).subscribe(x => console.log(x));
  }

  onCancel(){
    this.editing = !this.editing;
    console.log("pre edit")
    console.log(this.preEditManufacturer.manufacturerDescription)
    console.log("manufacturer")
    console.log(this.manufacturer.manufacturerDescription)
    this.manufacturer = this.preEditManufacturer;
    console.log("manufacturer after cancel")
    console.log(this.manufacturer.manufacturerDescription)
  }

  removeManufacturer(){
    if(confirm("Are you sure you would like to delete the entry?")){
      this.editing =!this.editing;
      this.service.removeManufacturer(this.manufacturer.manufacturerId).subscribe(x => console.log(x));
      window.location.reload()
    }
  }

}
