import { Component, Input, OnInit } from '@angular/core';
import { MuseumService } from 'src/app/museum.service';
import { Caliber } from '../../models/caliber';

@Component({
  selector: 'app-caliber',
  templateUrl: './caliber.component.html',
  styleUrls: ['./caliber.component.css']
})
export class CaliberComponent implements OnInit {

  @Input() caliber : Caliber;
  @Input() name : string;
  editing : boolean = true;

  constructor(private service : MuseumService) { }

  ngOnInit(): void {
    this.name = this.caliber.caliberSize+this.caliber.caliberUnit.replace(/\s/g,"").toLowerCase();
  }

  toggleEdit(){
    this.editing = !this.editing;
  }

  editCaliber(){
    this.editing = !this.editing;
    return this.service.editCaliber(this.caliber,this.caliber.caliberId).subscribe(x => console.log(x));
  }

  removeCaliber(){
    this.editing = !this.editing;
    this.service.removeCaliber(this.caliber.caliberId).subscribe(x => console.log(x));
    window.location.reload()
  }

}
