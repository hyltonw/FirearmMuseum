import { Component, OnInit } from '@angular/core';
import { Firearm } from '../Firearm';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-firearm-container',
  templateUrl: './firearm-container.component.html',
  styleUrls: ['./firearm-container.component.css']
})
export class FirearmContainerComponent implements OnInit {

  firearms : Firearm[];

  constructor(private firearmService : MuseumService) { }

  ngOnInit(): void {
    this.firearmService.getAllFirearms().subscribe(list => {
      this.firearms = list
    })
    console.log(this.firearms)
  }

}
