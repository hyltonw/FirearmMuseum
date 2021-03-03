import { Component, OnInit } from '@angular/core';
import { Caliber } from 'src/app/models/caliber';
import { MuseumService } from 'src/app/museum.service';

@Component({
  selector: 'app-caliber-container',
  templateUrl: './caliber-container.component.html',
  styleUrls: ['./caliber-container.component.css']
})
export class CaliberContainerComponent implements OnInit {

  calibers : Caliber[]

  constructor(private caliberservice : MuseumService) { }

  ngOnInit(): void {
    this.caliberservice.getAllCalibers().subscribe(list => {
      this.calibers = list
    })
    console.log(this.calibers)
  }

}
