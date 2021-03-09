import { Component, OnInit } from '@angular/core';
import { Manufacturer } from 'src/app/models/manufacturer';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {

  constructor(private service: MuseumService) { }

  ngOnInit(): void {
  }

  addManufacturer(name: string, description: string){

    let toAdd : Manufacturer={manufacturer : name, manufacturerDescription : description};
    this.service.addManufacturer(toAdd).subscribe(x => console.log(x));


  }

}
