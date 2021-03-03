import { Component, Input, OnInit } from '@angular/core';
import { Caliber } from '../../models/caliber';

@Component({
  selector: 'app-caliber',
  templateUrl: './caliber.component.html',
  styleUrls: ['./caliber.component.css']
})
export class CaliberComponent implements OnInit {

  @Input() caliber : Caliber;

  constructor() { }

  ngOnInit(): void {
    console.log(this.caliber)
  }

}
