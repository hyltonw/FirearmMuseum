import { Component, OnInit } from '@angular/core';
import { Caliber } from 'src/app/models/caliber';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-add-caliber',
  templateUrl: './add-caliber.component.html',
  styleUrls: ['./add-caliber.component.css']
})
export class AddCaliberComponent implements OnInit {

  constructor(private service : MuseumService) { }

  ngOnInit(): void {
    this.addCaliber("test size","test unit","test description")
  }

  addCaliber(caliberSize: string,caliberUnit: string,caliberDescription: string){

    let toAdd : Caliber = {caliberSize,caliberUnit,caliberDescription};
    return this.service.addCaliber(toAdd).subscribe(x => console.log(x));
  }

}
